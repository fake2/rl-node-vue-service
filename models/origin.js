'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Origin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Origin.init({
        origin_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: "origin_url_key"
        },


    }, {
        sequelize,
        tableName: 'origin',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: "origin_pkey",
                unique: true,
                fields: [
                    { name: "origin_id" },
                ]
            },
            {
                name: "origin_url_key",
                unique: true,
                fields: [
                    { name: "url" },
                ]
            },
        ]
    });
    return Origin;
};