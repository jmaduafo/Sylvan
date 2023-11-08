const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51O7lbVKZxnM73RBY87Mq5Hsj4sMjJWXpTo1nT5ApDnjJvl6EsqVzWqwChzvsKXmgxXcEhqnMkt3cuTKG1WaWwTqp00pFFAs8xg');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    let lineItems = [];
    req.body.items.forEach((item)=> {
        lineItems.push(
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.name,
                  images: [item.images[0]],
                  metadata: {
                    id: item.id,
                  },
                },
                unit_amount: item.price * 100,
              },
                quantity: item.cartQuantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
  } catch (err) {
    console.log(err)
  }
    
});

app.listen(4000, () => console.log("Listening on port 4000!"));

