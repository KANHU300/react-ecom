
import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

const storeInLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
    carts: fetchFromLocalStorage('cart'),
    wishlist: fetchFromLocalStorage('wishlist'),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.carts.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                state.carts.push(action.payload);
            }

            storeInLocalStorage('cart', state.carts);
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            storeInLocalStorage('cart', state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage('cart', state.carts);
        },
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
            storeInLocalStorage('wishlist', state.wishlist);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
            storeInLocalStorage('wishlist', state.wishlist);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((total, item) => total + (item.price * item.quantity), 0);
            state.itemsCount = state.carts.reduce((total, item) => total + item.quantity, 0);
        },
        toggleCartQty: (state, action) => {
            const tempCart = state.carts.map(item => {
                if(item.id === action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        tempQty++;
                        if(tempQty === item.stock) tempQty = item.stock;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });

            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },
        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    getCartTotal,
    toggleCartQty,
    setCartMessageOn,
    setCartMessageOff,
} = cartSlice.actions;

export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getAllWishlistItems = (state) => state.cart.wishlist;

export default cartSlice.reducer;
