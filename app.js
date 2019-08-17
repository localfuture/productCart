//jshint esversion:6
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/category", (req, res) => {
  res.render("category");
});
category = [{
  "mobile": [{
      "imgsrc": "/images/oneplus7.jpg",
      "alt": "OnePlus 7",
      "title": "OnePlus 7 (Mirror Blue, 6GB RAM, 128GB Storage)",
      "mrp": "₹ 32,999.00",
      "feebback": ["It is a known fact that many people are disappointed with OnePlus 7 Pro's pricing, size, thickness, bulkiness, bugs like phantom touches, etc. At least me, being a OnePlus fan from past so many years, was very much disappointed with OnePlus 7 Pro, in every aspect.",
      "It is so buttery smooth and insanely fast that i don't have words to describe whole experience... Just buy it you won't regret... Its better than OnePlus 7 Pro.",
      "Bought OnePlus 7 (8 GB variant) in first sale, using from more than 1 month, pretty impressed with OnePlus 7."]
    },
    {
      "imgsrc": "/images/redmi6.jpg",
      "alt": "redmi6",
      "title": "Redmi 6 (Black, 3GB RAM, 64GB Storage)",
      "mrp": "₹ 6,999.00",
      "feebback": [
        "Nice phone only demerits is that screen size is a bit small and speaker is a bit noisy",
        "amazing phone... Slim beautiful.. No words... Thanks amazone for timely delivery",
        "Good phone in this price better performance redmi 6 double camera fingerprint charger is so good battery backup is best"
      ]
    },
    {
      "imgsrc": "/images/redmigold.jpg",
      "alt": "redmigold",
      "title": "Redmi Y2 (Gold, 4GB RAM, 64GB Storage)",
      "mrp": "₹ 8,499.00",
      "feebback": [
       "Guys don't buy this model of Xiaomi, coz their is too many problem in this device also battery is drawing very very quick, I'm so frusted to spent 13000 worthless, pls go with Note 5 pro I think that phone has commandable for battery life",
       "If you want to buy a good phone within 10000 I am suggesting you this phone best camera plus everything is good. Best thing no heating while playing PUBG",
       "Totally waste dont buy .. battery back up poor...display not working sometime . Display quality not at all good"
      ]
    },
    {
      "imgsrc": "/images/samsung.jpg",
      "alt": "samsung galaxy M10",
      "title": "Samsung Galaxy M10 (Charcoal Black, 3+32GB)",
      "mrp": "₹ 7,990.00",
      "feebback": [
        "It's a worthless phone with only dislikes. The product is not up to the mark, the built quality, the resolution and the best part is the the camera is even worse.",
      "Ordered this product in the First Sale. And i have to say samsung has done a really good job in the budget segment. Phone Doesnt look or feel cheap.",
      "Excellent Phone in this budget. I've gifted it to someone. She likes it very much. Ocean color is awesome. Performance is also very good. Light weighted. Handy Phone."
      ]
    },
    {
      "imgsrc": "/images/nokia6.1.jpg",
      "alt": "nokia 6",
      "title": "Nokia 6.1 Plus (Black, 6GB RAM, 64GB Storage)",
      "mrp": "₹ 10,999.00",
      "feebback": [
        "No worry Happy with your Purchase and good brand quality",
        "Very good performance and happy with this purchase.",
        "I earlier had iphone 5s with just 5 MP camera. The photos taken by that phone are much much better than this 12 MP phone. Please donot buy this phone if you take lot of photos from phone."
      ]
    },
    {
      "imgsrc": "/images/Xiaomi mi a2.jpg",
      "alt": "xiaomi mi a2",
      "title": "Xiaomi Mi A2 (Black, 4GB RAM, 64GB Storage)",
      "mrp": "₹ 9,999.00",
      "feebback": [
        "I bought this in the Amazon sale for 13.5k so for that price its a very competent smartphone but it has some major drawbacks at regular MRP that stops it from being a perfect mid ranger. ",
        "It is an awesome phone.. this is for those who wants a better camera.. it's camera is truly amazing.specially the manual mode.. it's speaker is tooo loud. Although having 3010 battery it's capable to last 5hours of use online and 10hours of offline use..",
        "nothing great, other than camera, facing a major problem while calling screen is not getting off and causing call drop, going call on mute, flash getting on etc."
      ]
    },
    {
      "imgsrc": "/images/Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage).jpg",
      "alt": "Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage)",
      "title": "Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage)",
      "mrp": "₹ 8,999.00",
      "feebback": [
        "google play store is not working, apps update stuck in download pending.even though high speed internet and settings in google play store fine.",
        "Average mobile but picture quality not satisfied....",
        "Amzing phone i can't believe this phone some money and than more features i like this phone"
      ]
    },
    {
      "imgsrc": "/images/samsung m30.jpg",
      "alt": "Samsung Galaxy M30 (Gradation Blue, 4+64 GB)",
      "title": "Samsung Galaxy M30 (Gradation Blue, 4+64 GB)",
      "mrp": "₹ 13,990.00",
      "feebback": [
        "Don't fall for the negative reviews. This is best at the price. People following red mi phones but this has bigger advantage. ",
        "I just picked up an amazing phone which is Samsung m30 and I'm so happy to make the right decision.",
        "Phone is just fantastic but one problem in here.. does not work Google play or can't install or update any apps from Google play.. only just install from Samsung Galaxy app"
      ]
    },
    {
      "imgsrc": "/images/Samsung Galaxy M20 (Ocean Blue, 4+64GB).jpg",
      "alt": "Samsung Galaxy M20 (Ocean Blue, 4+64GB)",
      "title": "Samsung Galaxy M20 (Ocean Blue, 4+64GB)",
      "mrp": "₹ 11,990.00",
      "feebback": [
        "Firstly the look of the phone is amazing with its amazing notch display it looks attractive.The phone battery is awesome 5000 mAh. Although it has huge battery still its light weight that's great. Having a good hand feeling it feels easy to hold.",
        "Defective product received. The cell phone is hanging up again and again.i recently visited to Samsung Care Center they checked my phone and said that your phone have some sort of manufacturer default.",
        "Cheap, Screen size, weight, Audio clarity in headset, Smooth OS (4 GB Model)."
      ]
    },
    {
      "imgsrc": "/images/oneplus7.jpg",
      "alt": "OnePlus 7",
      "title": "OnePlus 7 (Mirror Blue, 6GB RAM, 128GB Storage)",
      "mrp": "₹ 32,999.00",
      "feebback": [
        "It is a known fact that many people are disappointed with OnePlus 7 Pro's pricing, size, thickness, bulkiness, bugs like phantom touches, etc. At least me, being a OnePlus fan from past so many years, was very much disappointed with OnePlus 7 Pro, in every aspect.",
        "It is so buttery smooth and insanely fast that i don't have words to describe whole experience... Just buy it you won't regret... Its better than OnePlus 7 Pro.",
        "Bought OnePlus 7 (8 GB variant) in first sale, using from more than 1 month, pretty impressed with OnePlus 7."
      ]
    },
    {
      "imgsrc": "/images/redmi6.jpg",
      "alt": "redmi6",
      "title": "Redmi 6 (Black, 3GB RAM, 64GB Storage)",
      "mrp": "₹ 6,999.00",
      "feebback": [
        "Nice phone only demerits is that screen size is a bit small and speaker is a bit noisy",
        "amazing phone... Slim beautiful.. No words... Thanks amazone for timely delivery",
        "Good phone in this price better performance redmi 6 double camera fingerprint charger is so good battery backup is best"
      ]
    },
    {
      "imgsrc": "/images/redmigold.jpg",
      "alt": "redmigold",
      "title": "Redmi Y2 (Gold, 4GB RAM, 64GB Storage)",
      "mrp": "₹ 8,499.00",
      "feebback": [
        "Guys don't buy this model of Xiaomi, coz their is too many problem in this device also battery is drawing very very quick, I'm so frusted to spent 13000 worthless, pls go with Note 5 pro I think that phone has commandable for battery life",
        "If you want to buy a good phone within 10000 I am suggesting you this phone best camera plus everything is good. Best thing no heating while playing PUBG",
        "Totally waste dont buy .. battery back up poor...display not working sometime . Display quality not at all good"
      ]
    },
    {
      "imgsrc": "/images/samsung.jpg",
      "alt": "samsung galaxy M10",
      "title": "Samsung Galaxy M10 (Charcoal Black, 3+32GB)",
      "mrp": "₹ 7,990.00",
      "feebback": [
        "It's a worthless phone with only dislikes. The product is not up to the mark, the built quality, the resolution and the best part is the the camera is even worse.",
        "Ordered this product in the First Sale. And i have to say samsung has done a really good job in the budget segment. Phone Doesnt look or feel cheap.",
        "Excellent Phone in this budget. I've gifted it to someone. She likes it very much. Ocean color is awesome. Performance is also very good. Light weighted. Handy Phone."
      ]
    },
    {
      "imgsrc": "/images/nokia6.1.jpg",
      "alt": "nokia 6",
      "title": "Nokia 6.1 Plus (Black, 6GB RAM, 64GB Storage)",
      "mrp": "₹ 10,999.00",
      "feebback": [
        "No worry Happy with your Purchase and good brand quality",
        "Very good performance and happy with this purchase.",
        "I earlier had iphone 5s with just 5 MP camera. The photos taken by that phone are much much better than this 12 MP phone. Please donot buy this phone if you take lot of photos from phone."
      ]
    },
    {
      "imgsrc": "/images/Xiaomi mi a2.jpg",
      "alt": "xiaomi mi a2",
      "title": "Xiaomi Mi A2 (Black, 4GB RAM, 64GB Storage)",
      "mrp": "₹ 9,999.00",
      "feebback": [
        "I bought this in the Amazon sale for 13.5k so for that price its a very competent smartphone but it has some major drawbacks at regular MRP that stops it from being a perfect mid ranger. ",
        "It is an awesome phone.. this is for those who wants a better camera.. it's camera is truly amazing.specially the manual mode.. it's speaker is tooo loud. Although having 3010 battery it's capable to last 5hours of use online and 10hours of offline use..",
        "nothing great, other than camera, facing a major problem while calling screen is not getting off and causing call drop, going call on mute, flash getting on etc."
      ]
    },
    {
      "imgsrc": "/images/Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage).jpg",
      "alt": "Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage)",
      "title": "Redmi Y3 (Elegant Blue, 3GB RAM, 32GB Storage)",
      "mrp": "₹ 8,999.00",
      "feebback": [
        "google play store is not working, apps update stuck in download pending.even though high speed internet and settings in google play store fine.",
        "Average mobile but picture quality not satisfied....",
        "Amzing phone i can't believe this phone some money and than more features i like this phone"
      ]
    },
    {
      "imgsrc": "/images/samsung m30.jpg",
      "alt": "Samsung Galaxy M30 (Gradation Blue, 4+64 GB)",
      "title": "Samsung Galaxy M30 (Gradation Blue, 4+64 GB)",
      "mrp": "₹ 13,990.00",
      "feebback": [
        "Don't fall for the negative reviews. This is best at the price. People following red mi phones but this has bigger advantage. ",
        "I just picked up an amazing phone which is Samsung m30 and I'm so happy to make the right decision.",
        "Phone is just fantastic but one problem in here.. does not work Google play or can't install or update any apps from Google play.. only just install from Samsung Galaxy app"
      ]
    },
    {
      "imgsrc": "/images/Samsung Galaxy M20 (Ocean Blue, 4+64GB).jpg",
      "alt": "Samsung Galaxy M20 (Ocean Blue, 4+64GB)",
      "title": "Samsung Galaxy M20 (Ocean Blue, 4+64GB)",
      "mrp": "₹ 11,990.00",
      "feebback": [{
        "user1": "Firstly the look of the phone is amazing with its amazing notch display it looks attractive.The phone battery is awesome 5000 mAh. Although it has huge battery still its light weight that's great. Having a good hand feeling it feels easy to hold.",
        "user2": "Defective product received. The cell phone is hanging up again and again.i recently visited to Samsung Care Center they checked my phone and said that your phone have some sort of manufacturer default.",
        "user3": "Cheap, Screen size, weight, Audio clarity in headset, Smooth OS (4 GB Model)."
      }]
    },
    {
        "imgsrc": "/images/oneplus7.jpg",
        "alt": "OnePlus 7",
        "title": "OnePlus 7 (Mirror Blue, 6GB RAM, 128GB Storage)",
        "mrp": "₹ 32,999.00",
        "feebback": [
          "It is a known fact that many people are disappointed with OnePlus 7 Pro's pricing, size, thickness, bulkiness, bugs like phantom touches, etc. At least me, being a OnePlus fan from past so many years, was very much disappointed with OnePlus 7 Pro, in every aspect.",
          "It is so buttery smooth and insanely fast that i don't have words to describe whole experience... Just buy it you won't regret... Its better than OnePlus 7 Pro.",
          "Bought OnePlus 7 (8 GB variant) in first sale, using from more than 1 month, pretty impressed with OnePlus 7."
        ]
      },
      {
        "imgsrc": "/images/redmi6.jpg",
        "alt": "redmi6",
        "title": "Redmi 6 (Black, 3GB RAM, 64GB Storage)",
        "mrp": "₹ 6,999.00",
        "feebback": [
          "Nice phone only demerits is that screen size is a bit small and speaker is a bit noisy",
          "amazing phone... Slim beautiful.. No words... Thanks amazone for timely delivery",
          "Good phone in this price better performance redmi 6 double camera fingerprint charger is so good battery backup is best"
        ]
      },
      {
        "imgsrc": "/images/redmigold.jpg",
        "alt": "redmigold",
        "title": "Redmi Y2 (Gold, 4GB RAM, 64GB Storage)",
        "mrp": "₹ 8,499.00",
        "feebback": [
          "Guys don't buy this model of Xiaomi, coz their is too many problem in this device also battery is drawing very very quick, I'm so frusted to spent 13000 worthless, pls go with Note 5 pro I think that phone has commandable for battery life",
          "If you want to buy a good phone within 10000 I am suggesting you this phone best camera plus everything is good. Best thing no heating while playing PUBG",
          "Totally waste dont buy .. battery back up poor...display not working sometime . Display quality not at all good"
        ]
      },
  ]
}];
app.get("/mobiles", (req, res) => {
  res.render("mobiles", {title:"Mobiles", category: category});
});

app.get("/single/:id",(req,res) => {
  const x = req.params.id;
  res.render("single",{mobile: category[0].mobile[x]});
});

app.listen(3000 || process.env.PORT, () => {
  console.log("Express listening on port 3000");
});
