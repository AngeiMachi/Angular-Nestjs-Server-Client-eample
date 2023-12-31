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
exports.CrimesService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let CrimesService = class CrimesService {
    constructor() {
        this.crimes = JSON.parse(fs.readFileSync('./src/crimes.json', 'utf8'));
    }
    getCrimes() {
        return this.crimes;
    }
    createCrime(crime) {
        const newCrime = { id: this.crimes.length + 1,
            name: crime.name,
            desciprtion: crime.desciprtion,
            color: crime.color,
            createDate: new Date(),
            lastUpdate: new Date(),
            createdBy: crime.createdBy
        };
        this.crimes = [...this.crimes, { ...newCrime }];
        const dataToWrite = '[' + this.crimes.map(crime => JSON.stringify(crime)).join('\n,') + ']';
        fs.writeFileSync('./src/crimes.json', dataToWrite);
        return crime;
    }
    updateCrime(crime) {
        const updatedCrime = { id: crime.id,
            name: crime.name,
            desciprtion: crime.desciprtion,
            color: crime.color,
            createDate: crime.createDate,
            lastUpdate: new Date(),
            createdBy: crime.createdBy
        };
        const index = this.crimes.findIndex(crime => crime.id === updatedCrime.id);
        this.crimes[index] = updatedCrime;
        const dataToWrite = '[' + this.crimes.map(crime => JSON.stringify(crime)).join('\n,') + ']';
        fs.writeFileSync('./src/crimes.json', dataToWrite);
        return crime;
    }
};
exports.CrimesService = CrimesService;
exports.CrimesService = CrimesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CrimesService);
//# sourceMappingURL=crimes.service.js.map