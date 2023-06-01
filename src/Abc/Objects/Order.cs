﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Abc
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Order.
    /// </summary>
    // *** Start programmer edit section *** (Order CustomAttributes)

    // *** End programmer edit section *** (Order CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("OrderE", new string[] {
            "Status as \'Status\'",
            "Client as \'Client\'",
            "Client.Password as \'Password\'",
            "Coupon as \'Coupon\'",
            "Coupon.ProductName as \'Product name\'"}, Hidden=new string[] {
            "Client.Password",
            "Coupon.ProductName"})]
    [AssociatedDetailViewAttribute("OrderE", "OrderProduct", "OrderProductE", true, "", "Order product", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("OrderE", "Client", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Password")]
    [MasterViewDefineAttribute("OrderE", "Coupon", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ProductName")]
    [View("OrderL", new string[] {
            "Status as \'Status\'",
            "Client.Password as \'Password\'",
            "Coupon.ProductName as \'Product name\'"})]
    public class Order : ICSSoft.STORMNET.DataObject
    {
        
        private string fStatus;
        
        private IIS.Abc.Client fClient;
        
        private IIS.Abc.Coupon fCoupon;
        
        private IIS.Abc.DetailArrayOfOrderProduct fOrderProduct;
        
        // *** Start programmer edit section *** (Order CustomMembers)

        // *** End programmer edit section *** (Order CustomMembers)

        
        /// <summary>
        /// Status.
        /// </summary>
        // *** Start programmer edit section *** (Order.Status CustomAttributes)

        // *** End programmer edit section *** (Order.Status CustomAttributes)
        [StrLen(255)]
        public virtual string Status
        {
            get
            {
                // *** Start programmer edit section *** (Order.Status Get start)

                // *** End programmer edit section *** (Order.Status Get start)
                string result = this.fStatus;
                // *** Start programmer edit section *** (Order.Status Get end)

                // *** End programmer edit section *** (Order.Status Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.Status Set start)

                // *** End programmer edit section *** (Order.Status Set start)
                this.fStatus = value;
                // *** Start programmer edit section *** (Order.Status Set end)

                // *** End programmer edit section *** (Order.Status Set end)
            }
        }
        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Order.Client CustomAttributes)

        // *** End programmer edit section *** (Order.Client CustomAttributes)
        [PropertyStorage(new string[] {
                "Client"})]
        [NotNull()]
        public virtual IIS.Abc.Client Client
        {
            get
            {
                // *** Start programmer edit section *** (Order.Client Get start)

                // *** End programmer edit section *** (Order.Client Get start)
                IIS.Abc.Client result = this.fClient;
                // *** Start programmer edit section *** (Order.Client Get end)

                // *** End programmer edit section *** (Order.Client Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.Client Set start)

                // *** End programmer edit section *** (Order.Client Set start)
                this.fClient = value;
                // *** Start programmer edit section *** (Order.Client Set end)

                // *** End programmer edit section *** (Order.Client Set end)
            }
        }
        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Order.Coupon CustomAttributes)

        // *** End programmer edit section *** (Order.Coupon CustomAttributes)
        [PropertyStorage(new string[] {
                "Coupon"})]
        public virtual IIS.Abc.Coupon Coupon
        {
            get
            {
                // *** Start programmer edit section *** (Order.Coupon Get start)

                // *** End programmer edit section *** (Order.Coupon Get start)
                IIS.Abc.Coupon result = this.fCoupon;
                // *** Start programmer edit section *** (Order.Coupon Get end)

                // *** End programmer edit section *** (Order.Coupon Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.Coupon Set start)

                // *** End programmer edit section *** (Order.Coupon Set start)
                this.fCoupon = value;
                // *** Start programmer edit section *** (Order.Coupon Set end)

                // *** End programmer edit section *** (Order.Coupon Set end)
            }
        }
        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Order.OrderProduct CustomAttributes)

        // *** End programmer edit section *** (Order.OrderProduct CustomAttributes)
        public virtual IIS.Abc.DetailArrayOfOrderProduct OrderProduct
        {
            get
            {
                // *** Start programmer edit section *** (Order.OrderProduct Get start)

                // *** End programmer edit section *** (Order.OrderProduct Get start)
                if ((this.fOrderProduct == null))
                {
                    this.fOrderProduct = new IIS.Abc.DetailArrayOfOrderProduct(this);
                }
                IIS.Abc.DetailArrayOfOrderProduct result = this.fOrderProduct;
                // *** Start programmer edit section *** (Order.OrderProduct Get end)

                // *** End programmer edit section *** (Order.OrderProduct Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.OrderProduct Set start)

                // *** End programmer edit section *** (Order.OrderProduct Set start)
                this.fOrderProduct = value;
                // *** Start programmer edit section *** (Order.OrderProduct Set end)

                // *** End programmer edit section *** (Order.OrderProduct Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "OrderE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View OrderE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("OrderE", typeof(IIS.Abc.Order));
                }
            }
            
            /// <summary>
            /// "OrderL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View OrderL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("OrderL", typeof(IIS.Abc.Order));
                }
            }
        }
    }
}
