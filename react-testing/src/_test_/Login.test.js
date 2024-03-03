import { render,screen } from "@testing-library/react";
import Login from "../Login";
   test('checking componenet loaded',()=>{
    // steps for testing heading element loaded
    render(<Login/>);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
   })


   test('checking email and password inputs ae empty',()=>{
    render(<Login/>)
    expect(screen.queryAllByPlaceholderText('Enter your email')).toHaveValue("");
    expect(screen.queryAllByPlaceholderText('Enter your Password')).toHaveValue("");
   })