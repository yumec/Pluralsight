﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using Acme.Biz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Acme.Common;

namespace Acme.Biz.Tests
{
    [TestClass()]
    public class VendorTests
    {
        [TestMethod()]
        public void SendWelcomeEmail_ValidCompany_Success()
        {
            // Arrange
            var vendor = new Vendor();
            vendor.CompanyName = " ABC Corp";
            var expected = "Message sent: Hello ABC Corp";

            // Act
            var actual = vendor.SendWelcomeEmail("Test Message");

            // Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void SendWelcomeEmail_EmptyCompany_Success()
        {
            // Arrange
            var vendor = new Vendor();
            vendor.CompanyName = "";
            var expected = "Message sent: Hello";

            // Act
            var actual = vendor.SendWelcomeEmail("Test Message");

            // Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void SendWelcomeEmail_NullCompany_Success()
        {
            // Arrange
            var vendor = new Vendor();
            vendor.CompanyName = null;
            var expected = "Message sent: Hello";

            // Act
            var actual = vendor.SendWelcomeEmail("Test Message");

            // Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void PlaceOrderTest()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = new OperationResult(true, "Order from Acme, Inc" + System.Environment.NewLine +
                            "Product: Tools-0001" + System.Environment.NewLine +
                            "Quantity: 12" + System.Environment.NewLine +
                            "Instructions: standard delivery");

            //Act
            var actual = vendor.PlaceOrder(product, 12);

            //Assert
            Assert.AreEqual(expected.Success, actual.Success);
            Assert.AreEqual(expected.Message, actual.Message);
        }

        [TestMethod()]
        [ExpectedException(typeof(ArgumentNullException))]
        public void PlaceOrder_NullProduct_Exception()
        {
            //Arrange
            var vendor = new Vendor();

            //Act
            var actual = vendor.PlaceOrder(null, 12);

            //Assert
            //Expected exception
        }

        [TestMethod()]
        public void PlaceOrder_3Parameters()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = new OperationResult(true, "Order from Acme, Inc" + System.Environment.NewLine +
                            "Product: Tools-0001" + System.Environment.NewLine +
                            "Quantity: 12" + System.Environment.NewLine +
                            "Instructions: standard delivery" + System.Environment.NewLine +
                            "Deliver By: 10/25/2016");

            //Act
            var actual = vendor.PlaceOrder(product, 12,
                new DateTimeOffset(2016, 10, 25, 0, 0, 0, new TimeSpan(-7, 0, 0)));

            //Assert
            Assert.AreEqual(expected.Success, actual.Success);
            Assert.AreEqual(expected.Message, actual.Message);
        }

        [TestMethod()]
        public void PlaceOrder_NoDeliveryDate()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = new OperationResult(true, "Order from Acme, Inc" + System.Environment.NewLine +
                            "Product: Tools-0001" + System.Environment.NewLine +
                            "Quantity: 12" + System.Environment.NewLine +
                            "Instructions: Deliver to Suite 42");

            //Act
            var actual = vendor.PlaceOrder(product, 12,
                        instructions: "Deliver to Suite 42");

            //Assert
            Assert.AreEqual(expected.Success, actual.Success);
            Assert.AreEqual(expected.Message, actual.Message);
        }

        [TestMethod()]
        public void PlaceOrderTest_WithAddress()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = new OperationResult(true, "Test With Address");

            //Act
            var actual = vendor.PlaceOrder(product, 12,
                                        Vendor.IncludeAddress.Yes,
                                        Vendor.SendCpy.No);

            //Assert
            Assert.AreEqual(expected.Success, actual.Success);
            Assert.AreEqual(expected.Message, actual.Message);
        }

        [TestMethod()]
        public void PlaceOrder_RefParameter()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = "Order from Acme";

            //Act
            string orderText = "Standard Order";
            vendor.PlaceOrderRefParameter(product, 12, ref orderText);
            var actual = orderText;

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void PlaceOrder_OutParameter()
        {
            //Arrange
            var vendor = new Vendor();
            var product = new Product(1, "Saw", "");
            var expected = "Order from Acme";

            //Act
            string orderText;
            vendor.PlaceOrderOutParameter(product, 12, out orderText);
            var actual = orderText;

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void ToStringTest()
        {
            //Arrange
            var vendor = new Vendor();
            vendor.VendorId = 1;
            vendor.CompanyName = "ABC Corp";
            var expected = "Vendor: ABC Corp";

            //Act
            var actual = vendor.ToString();

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod()]
        public void PrepareDirectionsTest()
        {
            //Arrange
            var vendor = new Vendor();
            var expected = @"Insert \r\n to define a new line";

            //Act
            var actual = vendor.PrepareDirections();
            Console.WriteLine(actual);

            //Assert
            Assert.AreEqual(expected, actual);
        }
    }
}