"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrimesController = void 0;
const common_1 = require("@nestjs/common");
const crimes_service_1 = require("./crimes.service");
let CrimesController = class CrimesController {
    constructor(crimesService) {
        this.crimesService = crimesService;
    }
    getTodos() {
        try {
            return this.crimesService.getCrimes();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CrimesController = CrimesController;
__decorate([
    (0, common_1.Get)('getCrimes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CrimesController.prototype, "getTodos", null);
exports.CrimesController = CrimesController = __decorate([
    (0, common_1.Controller)('crimes'),
    __metadata("design:paramtypes", [crimes_service_1.CrimesService])
], CrimesController);
//# sourceMappingURL=crimes.controller.js.map