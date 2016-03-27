﻿using Acme.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Acme.Biz
{
    /// <summary>
    /// Manages the vendors from whom we purchase our inventory.
    /// </summary>
    public class Vendor 
    {
        public enum IncludeAddress {Yes, No};
        public enum SendCpy {Yes, No};

        public int VendorId { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }

        /// <summary>
        /// Sends an email to welcome a new vendor.
        /// </summary>
        /// <returns></returns>
        public string SendWelcomeEmail(string message)
        {
            var emailService = new EmailService();
            var subject = "Hello" + this.CompanyName;
            var confirmation = emailService.SendMessage(subject,
                                                        message, 
                                                        this.Email);
            return confirmation;
        }

        /// <summary>
        /// Sends a product order to the vendor
        /// </summary>
        /// <param name="product">Product to order</param>
        /// <param name="quantity">Quantity of the product to order.</param>
        /// <param name="deliverBy">Request delivery date.</param>
        /// <param name="instructions">Delivery instruction.</param>
        /// <returns></returns>
        public OperationResult PlaceOrder(Product product, int quantity, 
                        DateTimeOffset? deliverBy = null, 
                        string instructions = "standard delivery")
        {
            if (product == null)
            {
                throw new ArgumentNullException(nameof(product));
            }

            if (quantity <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(quantity));
            }

            if (deliverBy <= DateTimeOffset.Now)
            {
                throw new ArgumentOutOfRangeException(nameof(deliverBy));
            }

            var success = false;

            var orderTextBuilder = new StringBuilder("Order from Acme, Inc" + System.Environment.NewLine +
                            "Product: " + product.ProductCode + System.Environment.NewLine +
                            "Quantity: " + quantity);

            if (!String.IsNullOrWhiteSpace(instructions))
            {
                orderTextBuilder.Append(System.Environment.NewLine + "Instructions: " + instructions);
            }

            if (deliverBy.HasValue)
            {
                orderTextBuilder.Append(System.Environment.NewLine +
                    "Deliver By: " + deliverBy.Value.ToString("d"));
            }

            var orderText = orderTextBuilder.ToString();
            var emailService = new EmailService();
            var confirmation = emailService.SendMessage("New order", orderText, this.Email);

            if (confirmation.StartsWith("Message sent:"))
            {
                success = true;
            }

            var operationResult = new OperationResult(success, orderText);

            return operationResult;
        }

        /// <summary>
        /// Sends a product order to vendoer.
        /// </summary>
        /// <param name="product">Product to order</param>
        /// <param name="quantity">Quantity of the product to order</param>
        /// <param name="includeAddress">Ture to include the sipping address</param>
        /// <param name="sendCopy">Ture to send a copy of the email to the current product</param>
        /// <returns>Success flag and order text</returns>
        public OperationResult PlaceOrder(Product product, int quantity,
                                          IncludeAddress includeAddress, 
                                          SendCpy sendCopy)
        {
            var orderText = "Test";
            if (includeAddress == IncludeAddress.Yes)
            {
                orderText += " With Address";
            }

            if (sendCopy == SendCpy.Yes)
            {
                orderText += " With Copy";
            }

            var operationResult = new OperationResult(true, orderText);

            return operationResult;
        }

        public bool PlaceOrderRefParameter(Product prodct, int quantity,
            ref string orderText)
        {
            var success = true;
            orderText = "Order from Acme";
            return success;
        }

        public bool PlaceOrderOutParameter(Product prodct, int quantity,
            out string orderText)
        {
            var success = true;
            orderText = "Order from Acme";
            return success;
        }

        public override string ToString()
        {
            string vendorInfo = "Vendor: " + this.CompanyName;
            //string vendorInfo = null;
            string result;
            /*
            // way 1
            if (!String.IsNullOrWhiteSpace(vendorInfo))
            {
                result = vendorInfo.ToLower();
                result = vendorInfo.ToUpper();
                result = vendorInfo.Replace("Vendor", "Supplier");

                var length = vendorInfo.Length;
                var index = vendorInfo.IndexOf(":");
                var begins = vendorInfo.StartsWith("Vendor");
            }
            */

            // way 2
            result = vendorInfo?.ToLower();
            result = vendorInfo?.ToUpper();
            result = vendorInfo?.Replace("Vendor", "Supplier");

            var length = vendorInfo?.Length;
            var index = vendorInfo?.IndexOf(":");
            var begins = vendorInfo?.StartsWith("Vendor");

            return vendorInfo;
        }

        public string PrepareDirections()
        {
            var directions = @"Insert \r\n to define a new line";
            return directions;
        }

        public string PrepareDirectionsOnTwoLines()
        {
            var directions = "First do this" + Environment.NewLine + "Then do that";
//            var directions2 = "First do this\r\nThen do that";
//            var directions3 = @"First do this
//Then do that";
            return directions;
        }
    }
}
