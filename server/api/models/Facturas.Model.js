import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const facturasSchema = new Schema(
  {
    cliente: { type: String, required: true },    
    cif: { type: String, required: true },
    iva: { type: String, required: false },
    fecha: { type: String, required: false },
    importeTotal:{ type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Facturas = mongoose.model('Facturas',facturasSchema );

export { Facturas }