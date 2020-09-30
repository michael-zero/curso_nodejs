//@desc obtém todos os bootcamps
//@routes GET api/v1/bootcamps
//@access Público
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all bootcamps'
    })
}

//@desc obtém um bootcamp
//@routes GET api/v1/bootcamps/:id
//@access Público
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show bootcamp ${req.params.id}`
    })
}
//@desc cria um novo bootcamp
//@routes Post api/v1/bootcamps/:id
//@access Privado
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Create new bootcamp`
    })
}

//@desc atualiza um bootcamp
//@routes Put api/v1/bootcamps/:id
//@access Privado
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    })
}

//@desc delete um  bootcamp
//@routes DELETE api/v1/bootcamps/:id
//@access Privado
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    })
}