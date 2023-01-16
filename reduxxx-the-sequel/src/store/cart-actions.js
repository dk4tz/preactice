import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://reduxxx-the-sequel-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT', // PUT replaces the data that exists, POST adds the data to the existing
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Whoo hoo!',
          message: 'Sent cart data',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'We done goofed',
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reduxxx-the-sequel-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error("Couldn't fetch cart data :(");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalNumItems: cartData.totalNumItems,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'We done goofed finna fetch!',
        })
      );
    }
  };
};
