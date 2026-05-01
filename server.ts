import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 🔥 CONFIG EMAIL
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

  // 🚀 API REAL
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: `"Portfólio - ${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "🚀 Nova mensagem do site",
        html: `
          <div style="font-family: Arial; padding: 10px;">
            <h2>📩 Nova mensagem recebida</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Mensagem enviada com sucesso 🚀",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      res.status(500).json({
        success: false,
        message: "Erro ao enviar mensagem ❌",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();