export default function handler(req, res) {

  if (req.method === "POST") {

    const data = req.body;

    console.log("Paiement reçu :", data);

    if (data.transaction_status === "SUCCESS") {
      console.log("✅ Paiement validé !");
    } else {
      console.log("⏳ Paiement en attente...");
    }

    return res.status(200).json({ status: "OK" });
  }

  return res.status(200).send("API active");
}