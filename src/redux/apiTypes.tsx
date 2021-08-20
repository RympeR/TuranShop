export type categoryType = {
  id: number;
  parent?: number;
  name: string;
  display: boolean;
  lft: number;
  rght: number;
  tree_id: number;
  category_image?: string;
  subcategory: number;
};

export type paymentMethodType = {
  id: number;
  name: string;
};

export type deliveryType = {
  id: number;
  name: string;
};

export type cardCreationType = {
  id: number;
  seller: number;
  discount_price: number;
  title: string;
  description?: string;
  present: boolean;
  price: number;
  preview: string;
  characteristics: string;
  category: number;
  attachments: number[];
  payment_methods: number[];
  deliver_methods: number[];
};

export type commentCreateType = {
  id: number;
  comment: string;
  user: number;
  card: number;
};

export type cardCommentType = {
  id: number;
  comment: string;
  user: shortUserType;
  datetime: number;
  card: number;
};

export type shopCommentCreateType = {
  id: number;
  comment: string;
  user: number;
  shop: number;
};

export type shopCommentType = {
  id: number;
  comment: string;
  user: shortUserType;
  datetime: number;
  shop: number;
};

export type rateCreateType = {
  id: number;
  rate: number;
  user: number;
  card: number;
};

export type shopRateType = {
  id: number;
  rate: number;
  user: shortUserType;
  shop: number;
};

export type shortUserType = {
  pk: number;
  username: string;
  image: string;
  fio: string;
  verified: boolean;
};

export type sellerType = {
  id: number;
  owner: shortUserType;
  name: string;
  logo: string;
};

export type attachmentType = {
  id: number;
  attachment: string;
  attachment_type: string;
};

export type scheduleType = {
  id: number;
  day: string;
  work_time: string;
};

export type fullCardType = {
  title: string;
  description: string;
  seller: sellerType;
  present: boolean;
  discount_price: number;
  preview: string;
  attachments: attachmentType[];
  category: categoryType;
  payment_methods: paymentMethodType[];
  deliver_methods: deliveryType[];
  characteristics: string;
  calc_price: number;
  comments: cardCommentType[];
  comments_amount: number;
  rate: rateCreateType[];
  average_rate: number;
};

export type fullShopType = {
  id: number;
  owner: shortUserType;
  schedule: scheduleType[];
  comments: shopCommentType[];
  rate: shopRateType[];
  average_rate: {
    rate__avg: number;
  };
  last_sold_products: fullCardType[];
  comments_amount: number;
  name: string;
  logo: string;
  description: string;
};

export type shortItemType = {
  title: string;
  price: number;
  discount_price?: number;
  preview: string;
  calc_price: number;
  comments_amount: number;
  average_rate: number;
};

export type cartItemType = {
  id: number;
  item: shortItemType;
  quantity: number;
};

export type addressType = {
  id: number;
  street_address: string;
  apartment_address: string;
};

export type couponType = {
  id: number;
  code: string;
  discount_percent: number;
  amount: number;
};

export type orderType = {
  id: number;
  user: shortUserType;
  items: cartItemType[];
  created_at: number;
  coupon: couponType;
  address: addressType;
  approved: boolean;
  fio: string;
  phone_number: string;
  email: string;
  ordered: boolean;
  comment: string;
  being_delivered: boolean;
  received: boolean;
  refund_requested: boolean;
  refund_granted: boolean;
};
