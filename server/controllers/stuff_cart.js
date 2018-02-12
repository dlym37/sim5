module.exports = {
    get_stuff: (req, res) => {
        const db = req.app.get('db');
        const {model} = req.query//Sim5 70K
        console.log('model',model);
        req.session.cart = [{ //SIM5 75F
            model: model
        }]

        db.get_stuff([model]).then(stuff => {
            console.log(stuff);
            res.status(200).send(stuff)
        })
    }
}