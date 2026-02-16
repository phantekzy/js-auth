export const verifyToken = (req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
}
