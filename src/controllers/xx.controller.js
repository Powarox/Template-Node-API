import Xx from "../models/xx.model.js";

class Controller {
    // Get all
    async getAll(req, res) {
        try {
            const xx = await Xx.find({});
            console.log("Get all ✔️");
            res.send(xx);
        } catch (err) {
            console.log("Get all ❌");
            res.status(500).json(err);
        }
    }

    // Get one
    async get(req, res) {
        const code = req.params.id;
        try {
            const xx = await Xx.findOne({ code: code });
            console.log("Get " + code + " ✔️");
            res.send(xx);
        } catch (err) {
            console.log("Get " + code + " ❌");
            res.status(500).json(err);
        }
    }

    // Create one
    async create(req, res) {
        const code = req.body.code;
        const xx = await Xx.findOne({ code: code });
        if (xx) {
            console.log("Already exist ❌");
            return res.status(409).send("Already exist");
        }

        try {
            const xx = new Xx(req.body);
            const saveXx = await xx.save();
            console.log("Create new ✔️ ", req.body);
            res.status(201).json(saveXx);
        } catch (err) {
            console.log("Create new ❌");
            res.status(400).json(err);
        }
    }

    // Update one
    async update(req, res) {
        const code = req.params.id;
        try {
            const xx = await Xx.findOneAndUpdate({ code: code }, req.body, {
                new: true,
                runValidators: true,
            });
            if (!xx) return res.status(404).send("Not found");

            console.log("Update " + code + " ✔️");
            res.send(xx);
        } catch (err) {
            console.log("Update " + code + " ❌");
            res.status(500).json(err);
        }
    }

    // Delete one
    async delete(req, res) {
        const code = req.params.id;
        try {
            const xx = await Xx.findOneAndDelete({ code: code });
            if (!xx) return res.status(404).send("Not found");

            console.log("Delete " + code + " ✔️");
            res.send(xx);
        } catch (err) {
            console.log("Delete " + code + " ❌");
            res.status(500).json(err);
        }
    }
}

const controller = new Controller();
export default controller;
