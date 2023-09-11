exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Comment Created "
    })
 };

exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Comment Read"
    })
 };

exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Comment Delete"
    })
 };


exports.update = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Comment update"
    })
 };
