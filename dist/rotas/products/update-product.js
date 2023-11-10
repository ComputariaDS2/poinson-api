"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const produto_1 = require("../../model/produto");
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield produto_1.Product.findByPk(id);
            if (!product) {
                return res.json({ error: 'product not found' });
            }
            const updatedProduct = yield product.update(req.body);
            res.json(updatedProduct);
        }
        catch (error) {
            if (error instanceof (Error))
                res.status(500).json({ error: error.message });
        }
    });
}
exports.updateProduct = updateProduct;
