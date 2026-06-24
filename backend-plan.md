# SinoTex Middle East Backend Plan

This static front-end is ready for GitHub Pages. For production, add a Node.js + MySQL backend with these core modules.

## Recommended Stack

- Frontend: React or Next.js, Tailwind CSS, i18n routing for English and Arabic.
- Backend: Node.js, Express or NestJS.
- Database: MySQL 8.
- Email: SMTP or SendGrid for RFQ notifications.
- Analytics: Google Analytics 4 and Google Search Console.
- Future ERP: REST or webhook sync for products, stock, prices and RFQs.

## Main Tables

### products

- id
- sku
- category
- name_en
- name_ar
- composition
- gsm
- width
- moq
- status
- image_url
- active
- created_at
- updated_at

### product_colors

- id
- product_id
- color_name
- color_code

### inventory

- id
- product_id
- color_name
- ready_stock
- in_production
- shippable_stock
- warehouse_location
- updated_at

### price_tiers

- id
- product_id
- min_quantity
- max_quantity
- unit
- fob_price
- cif_iraq_reference
- currency

### rfqs

- id
- company_name
- contact_person
- country
- whatsapp
- email
- purchase_quantity
- requirement_text
- status
- created_at

### rfq_items

- id
- rfq_id
- product_id
- requested_color
- requested_quantity

## API Endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/inventory?color=&gsm=&minStock=`
- `GET /api/prices`
- `POST /api/rfqs`
- `GET /api/catalog.pdf`
- `POST /api/freight/estimate`

## RFQ Email Flow

1. Customer adds products to inquiry cart.
2. Customer submits company, contact, country, WhatsApp, email, quantity and requirements.
3. Backend stores RFQ and RFQ items.
4. Backend emails sales team with all RFQ details.
5. Optional: send confirmation email to buyer.

## SEO Notes

- Use English as default language.
- Add Arabic pages with `dir="rtl"` and hreflang tags.
- Product pages should have unique meta title, description and structured data.
- Key search terms:
  - China fabric supplier Iraq
  - fabric exporter to Middle East
  - knitted fabric supplier China
  - woven fabric wholesale Iraq
  - FOB fabric price China
