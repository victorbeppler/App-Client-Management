import { mockProducts } from './product'

export const mockCustomers = [
  {
    id: 1,
    name: 'Laura Martins',
    document: '123.456.789-01',
    email: 'laura@example.com',
    phone: '(11) 91234-5678',
    active: true,
    products: [
      mockProducts.find((p) => p.id === 1),
      mockProducts.find((p) => p.id === 11),
      mockProducts.find((p) => p.id === 6),
      mockProducts.find((p) => p.id === 16),
      mockProducts.find((p) => p.id === 20)
    ]
  },
  {
    id: 2,
    name: 'Rafael Souza',
    document: '987.654.321-09',
    email: 'rafael@example.com',
    phone: '(21) 98765-4321',
    active: true,
    products: [
      mockProducts.find((p) => p.id === 2),
      mockProducts.find((p) => p.id === 12),
      mockProducts.find((p) => p.id === 7),
      mockProducts.find((p) => p.id === 17),
      mockProducts.find((p) => p.id === 19)
    ]
  },
  {
    id: 3,
    name: 'Carla Diaz',
    document: '234.567.890-12',
    email: 'carla@example.com',
    phone: '(31) 93456-7890',
    active: true,
    products: [
      mockProducts.find((p) => p.id === 3),
      mockProducts.find((p) => p.id === 13),
      mockProducts.find((p) => p.id === 8),
      mockProducts.find((p) => p.id === 18),
      mockProducts.find((p) => p.id === 10)
    ]
  },
  {
    id: 4,
    name: 'Fernando Gomes',
    document: '345.678.901-23',
    email: 'fernando@example.com',
    phone: '(41) 94567-8901',
    active: true,
    products: [
      mockProducts.find((p) => p.id === 4),
      mockProducts.find((p) => p.id === 14),
      mockProducts.find((p) => p.id === 9),
      mockProducts.find((p) => p.id === 19),
      mockProducts.find((p) => p.id === 5)
    ]
  },
  {
    id: 5,
    name: 'Aline Ferreira',
    document: '456.789.012-34',
    email: 'aline@example.com',
    phone: '(51) 95678-9012',
    active: true,
    products: [
      mockProducts.find((p) => p.id === 5),
      mockProducts.find((p) => p.id === 15),
      mockProducts.find((p) => p.id === 10),
      mockProducts.find((p) => p.id === 20),
      mockProducts.find((p) => p.id === 4)
    ]
  }
]
