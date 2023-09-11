exports.create = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Message Created "
    })
 };

exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Message Read"
    })
 };

exports.delete = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Message delete"
    })
 };


exports.update = async (req, res) => { 
    res.status(200).json({
        status:"success", 
        data:"Message update"
    })
 };
