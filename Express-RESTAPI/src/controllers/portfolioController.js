exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"portfolio Created "
    })
 };

exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"portfolio Read"
    })
 };

exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"portfolio delete"
    })
 };


exports.update = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"portfolio update"
    })
 };
