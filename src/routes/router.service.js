import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render(
        "home",
        { title: "Home | AlexisDev" }
    );
});

router.get("/contact", (req, res) => {
    res.render(
        "contact",
        { title: "Contact | AlexisDev" },
    );
});

router.get("/about", (req, res) => {
    res.render(
        "about",
        { title: "About | AlexisDev" },
    )
});

router.get("/pay", (req, res) => {
    res.redirect("https://www.paypal.me/NotCacha");
});

export default router;
