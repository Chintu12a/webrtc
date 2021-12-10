const otpService = require('../services/otp-service')
const hashService = require('../services/hash-service')

class AuthController {
    async sendOtp(req,res) {
        // logic
        const { phone } = req.body;
        if (!phone) {
            res.status(200).json({ message: 'Phone field is required!' });
        }

        const otp = await otpService.generateOtp();

        // hash otp
        const ttl = 1000*60*2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash =  hashService.hashOtp(data);

        // send otp
        try {
            await otpService.sendSms(phone, otp)
            res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            })
        } catch (error) {
            console.log(error);
            res.json(500).json({message: 'failed'})
        }
     }
 }

module.exports = new AuthController();