"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFilters = void 0;
// filters/applyFilters.ts
const applyFilters = (category, priceRange, typeFilter) => {
    const query = category ? { category } : {};
    if (priceRange) {
        query.newPrice = { $gte: priceRange[0], $lte: priceRange[1] };
    }
    if (typeFilter && typeFilter.length > 0) {
        query.type = { $in: typeFilter };
    }
    console.log("Applying filters with query:", query);
    return query;
};
exports.applyFilters = applyFilters;
