import { Router } from 'express'

const router = Router()

router.get('/',(req,res) => {
    res.send("Hello word!")
})

router.get('/about',(req,res) => {
    res.send("Hello word is aboput!")
})
export default router;