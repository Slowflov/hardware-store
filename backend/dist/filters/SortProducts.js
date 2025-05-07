"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortOptions = void 0;
const getSortOptions = (sortBy) => {
    const sortOptions = {};
    if (sortBy === "price_asc") {
        sortOptions.newPrice = 1;
    }
    else if (sortBy === "price_desc") {
        sortOptions.newPrice = -1;
    }
    else if (sortBy === "discount") {
        return {
            customPrice: -1,
            quantity: -1
        };
    }
    else if (sortBy === "latest") {
        sortOptions._id = -1;
    }
    return sortOptions;
};
exports.getSortOptions = getSortOptions;
