export default async function handler(req, res) {

  if (req.method === "POST") {

    const data = req.body;

    console.log("Paiement reçu :", data);

    if (data.transaction_status === "SUCCESS") {

      // Ici tu peux débloquer contenu
      console.log("Paiement validé ✅");

    }

    res.status(200).json({ status: "ok" });

  } else {
    res.status(405).end();
  }
}
