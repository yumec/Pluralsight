using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Acme.Common;
using static Acme.Common.LoggingService; // C#6 new feature

namespace Acme.Biz
{
    /// <summary>
    /// Managers products carried in inventory
    /// </summary>
    public class Product
    {

        #region " Constructors "
        public Product()
        {
            Console.WriteLine("Product instance created.");
            //this.ProductVendor = new Vendor();
            this.MinimumPrice = .96m;
            this.Category = "Tools";

        }

        public Product(int productId,
                        string productName,
                        string description) : this()
        {
            this.ProductId = productId;
            this.ProductName = productName;
            this.Description = description;
            if (ProductName.StartsWith("Bulk"))
            {
                this.MinimumPrice = 9.99m;
            }
            Console.WriteLine("Product instance has a name: " + ProductName);
        }
        #endregion

        #region " Properties "

        public const double InchesPermeter = 39.37;
        public readonly decimal MinimumPrice;

        private DateTime? availabilityDate;

        public DateTime? AvailabilityData
        {
            get { return availabilityDate; }
            set { availabilityDate = value; }
        }


        private int productId;

        public int ProductId
        {
            get { return productId; }
            set { productId = value; }
        }

        private string productName;

        public string ProductName
        {
            get {
                var formattedValue = productName?.Trim();
                return formattedValue;
            }
            set {
                if (value.Length < 3)
                {
                    ValidationMessage = "Product Name must be at least 3 characters";
                } else if(value.Length > 20)
                {
                    ValidationMessage = "Product Name cannot be more than 20 characters";
                } else
                {
                    productName = value;
                }
            }
        }

        private string description;

        public string Description
        {
            get { return description; }
            set { description = value; }
        }

        private Vendor productVendor;

        public Vendor ProductVendor
        {
            get
            {
                // vendor is another class, we use lazy loading 
                // Initialize in the property getter
                if (productVendor == null)
                {
                    productVendor = new Vendor();
                }
                return productVendor;
            }
            set { productVendor = value; }
        }

        internal string Category { get; set; }
        public int SequenceNumber { get; set; } = 1;

        //public string ProductCode => this.Category + "-" + this.SequenceNumber;
        //public string ProductCode => string.Format("{0}-{1:0000}", this.Category, this.SequenceNumber);
        public string ProductCode => $"{this.Category}-{this.SequenceNumber:0000}";

        public string ValidationMessage { get; private set; }

        public decimal Cost { get; set; }

        #endregion

        #region " Methods "
        public string SayHello()
        {
            //var vendor = new Vendor();
            //vendor.SendWelcomeEmail("Message from Product");

            var emailService = new EmailService();
            var confirmation = emailService.SendMessage("New Product",
                this.ProductName, "sales@abc.com");

            var result = LoggingService.LogAction("saying hello");
            var result2 = LogAction("saying hello");

            return "Hello " + ProductName +
                " (" + ProductId + "): " + Description +
                " Available on: " + AvailabilityData?.ToShortDateString();
        }

        public override string ToString()
        {
            return this.ProductName + " (" + this.ProductId + ")";
        }

        /// <summary>
        /// Calculates the suggested retail price
        /// </summary>
        /// <param name="markupPercent">Percent used to mark up the cost</param>
        /// <returns></returns>
        public decimal CalculateSuggestionedPrice(decimal markupPercent) =>
            this.Cost + (this.Cost * markupPercent / 100);


        #endregion

    }
}
