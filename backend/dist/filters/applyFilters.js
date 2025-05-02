"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFilters = void 0;
const applyFilters = (category, priceRange, typeFilter) => {
    const query = category ? { category } : {};
    if (priceRange) {
        query.$expr = {
            $and: [
                { $gte: [{ $toDouble: "$newPrice" }, priceRange[0]] },
                { $lte: [{ $toDouble: "$newPrice" }, priceRange[1]] },
            ],
        };
    }
    if (typeFilter && typeFilter.length > 0) {
        query.type = { $in: typeFilter };
    }
    return query;
};
exports.applyFilters = applyFilters;
