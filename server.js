const express = require('express');
const cors = require('cors');

require('dotenv').config();

const stripe = require('stripe')(process.env.SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static('public'));
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
        success_url: "/success",
        cancel_url: "/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
  } catch (err) {
    console.log(err)
  }
    
});

app.listen(4000, () => console.log("Listening on port 4000!"));

