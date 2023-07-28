module.exports = class EXController{
    static async oi(req,res){
        res.status(200).json({message: "funcionou"})
    }
}