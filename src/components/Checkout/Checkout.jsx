import Input from '../UI/Input';
import Button from '../UI/Button';

export default function Checkout() {
  return (
    <form action="">
      <h2>Checkout</h2>
      <p>Total Amount: 2324</p>

      <Input label="Full Name" type="text" id="name" />
      <Input label="E-mail Address" type="email" id="email" />
      <Input label="Street" type="text" id="street" />

      <div>
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>

      <div>
        <Button type="button" textOnly>
          Close
        </Button>
        <Button>Submit Order</Button>
      </div>
    </form>
  );
}
