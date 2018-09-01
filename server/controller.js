module.exports = {
    
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(houses => {
            res.status(200).json(houses)}).catch(error => {
                res.status(500).json({ errormessage: 'Cannot get house list.'});
                console.log(error)
            })
    },
    addNewHouse: ( req, res ) => {
        const db = req.app.get('db');
        let { name, address, city, state, zip  } = req.body;
        
        db.post_house( {name, address, city, state, zip} ).then(house => {
            res.status(200).json(house)}).catch(error => {
                res.status(500).json( { errormessage: 'Unable to post your item!' } )
                console.log(error)
            })
    },
    editHouse: (req, res) => {
        const db = req.app.get('db');
        let { name, address, city, state, zip  } = req.body;
        let { id } = req.params;

        db.edit_House( [id, name, address, city, state, zip ] ).then(house => {
            res.status(200).json(house)}).catch(error => {
                res.status(500).json({ errormessage: 'Cannot update the listing.'});
                console.log(error)
            })
    },

    deleteHouse: (req, res) =>{
        const db = req.app.get('db')
        let { id } = req.params;

        db.delete_house( [ id ] ).then(response => { 
            res.status(200).json(response)}).catch(err => {
                res.state(500).json({errormessage: 'Cannot delete the posting.'})
                console.log(err)
        })
    }
}