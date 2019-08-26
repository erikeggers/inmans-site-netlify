import React, { Component } from 'react'
import Layout from '../components/layout'

export default class ShippingReturns extends Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <h2>Shipping & Returns</h2>
          <h3>Shipping Policy</h3>
          <ul>
            <li>
              Orders are usually shipped 1-2 business days after order is
              placed.
            </li>
            <li>
              Orders are shipped via UPS & USPS solely at the discretion of
              Inman’s Specialty Foods, LLC.
            </li>
            <li>
              Estimated delivery time is 2-7 days after your order is shipped,
              depending on your location.
            </li>
            <li>
              If ordering for a holiday or other special occasion, please order
              in advance as inventories can be lower and delivery times can be
              longer.
            </li>
            <li>
              If your package needs to be redirected or rerouted due to an error
              in entering your shipping address, you will be charged an
              additional $12 redirect shipping fee.{' '}
            </li>
            <li>We only ship to the 48 contiguous states.</li>
            <li>
              Alaska, Hawaii, or US protected territory residents can order by
              phone only. Additional shipping charges will apply. We do not ship
              internationally.
            </li>
            <li>
              If you are unhappy with our products, you can email us to allow us
              to evaluate the issue, before we determine if a refund would
              apply.
            </li>
            <li>
              We accept Visa, MasterCard, Discover Card, American Express, and
              any other cards PayPal accepts. You do not need a PayPal account
              to make a purchase.
            </li>
          </ul>
          <h3>Return Policy</h3>
          <p>
            All returns must be submitted within 7 days of receiving your
            shipment. We reserve the right to limit the amount of claims per
            customer. All returns must be submitted using our online return
            form.
          </p>
          <h3>Damaged Product</h3>
          <p>
            If your products has sustained damage in the shipping process,
            please use our online return form. Please provide all details
            required on the form. In addition, please submit a photo of the
            damaged product and packaging to admin@inmanspecialtyfoods.com
          </p>
          <p>
            If our company has determined a valid claim has been submitted, we
            will replace your product at no cost to you.
          </p>
          <h3>Received Wrong Product</h3>
          <p>
            If you receive the wrong product, please use our online return form.
            Please provide all details required on the form.{' '}
          </p>
          <p>
            If you received the wrong product due to an error on our behalf the
            correct product will be reshipped to you at no additional cost. You
            will be contacted by our company with instructions to return the
            wrong product. Product must be unopened to qualify for a refund or
            exchange.
          </p>

          <h3>Ordered Wrong Product</h3>
          <p>
            If you ordered the wrong product, please use our online return form.
            Please provide all details required on the form.
          </p>
          <p>
            If you ordered and received the wrong item you will be responsible
            for the return shipping costs as well as the cost to reship the
            correct product. Product must be unopened to qualify for a refund or
            exchange.
          </p>
        </div>
      </Layout>
    )
  }
}
