export function logmiddleware(req,res,next){
    const date = (new Date())
    .toISOString()
    .replace(/T/,'');
    
    console.log(`[${date}]${req.ip}${req.method}${req.url}`);
}