export default {
  projections: {
    OrderE: {
      status: {
        __caption__: 'Status'
      },
      client: {
        __caption__: 'Client',
        password: {
          __caption__: 'Password'
        }
      },
      coupon: {
        __caption__: 'Coupon',
        productName: {
          __caption__: 'Product name'
        }
      },
      orderProduct: {
        __caption__: 'Order product',
        amount: {
          __caption__: 'Amount'
        },
        product: {
          __caption__: 'Product',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    OrderL: {
      status: {
        __caption__: 'Status'
      },
      client: {
        __caption__: 'Password',
        password: {
          __caption__: 'Password'
        }
      },
      coupon: {
        __caption__: 'Product name',
        productName: {
          __caption__: 'Product name'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Status'
    },
    client: {
      __caption__: 'Client'
    },
    coupon: {
      __caption__: 'Coupon'
    },
    orderProduct: {
      __caption__: 'Order product'
    }
  }
};
