const {User,CategoryEarning,Earning,Bill,CategoryBill,sequelize} = require('../db')


const sumEarningsByCategoryController = async (UserId,month) => {
    const user = await User.findByPk(UserId)
    console.log(user);
    if (!user) {
        return {
            error: 'ID de usuario inválido',
        };
    }
    if (!month || month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Earning.findAll({
        where: {
            UserId,
            date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
            [sequelize.col('CategoryEarning.name'), 'category_name'],
            [sequelize.fn('SUM', sequelize.col('amount')), 'ingresos_totales'],
        ],
        include: {
            model: CategoryEarning,
            attributes: [],
        },
        group: ['CategoryEarning.name'],  
    });
    if (!response.length) {
        return `No se encontraron ingresos para el mes indicado: ${month} `
    }
    return response;
};

const sumBillsByCategoryController = async (UserId,month) => {
    const user = await User.findByPk(UserId)
    if (!user) {
        return {
            error: 'ID de usuario inválido',
        };
    }
    if (!month || month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Bill.findAll({
        where: {
            UserId,
            date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
            [sequelize.col('CategoryBill.name'), 'category_name'],
            [sequelize.fn('SUM', sequelize.col('amount')), 'ingresos_totales'],
        ],
        include: {
            model: CategoryBill,
            attributes: [],
        },
        group: ['CategoryBill.name'],  
    });
    if (!response.length) {
        return `No se encontraron ingresos para el mes indicado: ${month} `
    }
    return response;
}


const sumBillsMonthControlle = async (UserId, month) => {
    console.log(month);
    const user = await User.findByPk(UserId)
    if (!user) {
        return {
            error: 'El usuario no exite',
        };
    }
    if (!month|| month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Bill.findAll({
        where: {
            UserId,
            date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
          [sequelize.fn('MONTH', sequelize.col('date')), 'month'],
          [sequelize.fn('SUM', sequelize.col('amount')), 'total_monto']
        ],
        group: ['month'],
        raw: true
      })
    if (response.length==0) {
        return `El Mes no tiene Gatos Asociados `
    }
    return response;
}


module.exports = {
    sumEarningsByCategoryController,
    sumBillsByCategoryController,
    sumBillsMonthControlle
}