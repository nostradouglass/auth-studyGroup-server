import { Router } from 'express'
var router = Router()

router.get("/", (req: any, res: any) => {
    res.send("hello")
})

module.exports = router