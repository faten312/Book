import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getbooks=createAsyncThunk('book/getbook',async(_,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI;
    try{
        const data=await fetch('http://localhost:3005/books');
        const response =await data.json();
        return response;


    }catch(error){
       return rejectWithValue(error.message);
    }
}
);


export const insertbooks=createAsyncThunk('book/insertbook',async(insertdata,thunkAPI)=>{
    const{rejectWithValue , getState}=thunkAPI;
    try{

        insertdata.userName=getState().auth.name;
        const res=await fetch('http://localhost:3005/books',{
            method:"POST",
            body:JSON.stringify(insertdata),
            headers:{
                'Content-Type': 'application/json; charset=UTF-8',
            },

        });
        const data =await res.json();
        return data;


    }catch(error){
       return rejectWithValue(error.message);
    }
}

);


export const deletebooks=createAsyncThunk('book/deletetbook',async(item,thunkAPI)=>{
    const{rejectWithValue}=thunkAPI;
    try{

      
        await fetch(`http://localhost:3005/books/${item.id}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json; charset=UTF-8',
            },

        });
    
        return item;


    }catch(error){
       return rejectWithValue(error.message);
    }
}

)










const bookslice=createSlice({
    name:'book',
    initialState:{book:[] , isLoading:false ,error:null , bookinfo:null},
    extraReducers:{
        [getbooks.pending]:(state , action) =>{
            state.isLoading=true;
            state.error=null;
            console.log(action)
        },
        [getbooks.fulfilled]:(state , action) =>{
            state.isLoading=false;
            state.book=action.payload;
            console.log(action)
        },
        [getbooks.rejected]:(state , action) =>{
            state.isLoading=false;
            state.error=action.error;
            console.log(action)
        },

        //insertbooks

        [insertbooks.pending]:(state , action) =>{
            state.isLoading=true;
            state.error=null;
            console.log(action)
        },
        [insertbooks.fulfilled]:(state , action) =>{
            state.isLoading=false;
            state.book.push(action.payload);
            console.log(action)
        },
        [insertbooks.rejected]:(state , action) =>{
            state.isLoading=false;
            state.error=action.error;
            console.log(action)
        },

        //deletebooks 

        [deletebooks.pending]:(state , action) =>{
            state.isLoading=true;
            state.error=null;
            console.log(action)
        },
        [deletebooks.fulfilled]:(state , action) =>{
            state.isLoading=false;
            state.book=state.book.filter((el)=>el.id !==action.payload.id);
          
          
        },
        [deletebooks.rejected]:(state , action) =>{
            state.isLoading=false;
            state.error=action.error;
            console.log(action)
        },


        
        






    }
})


export default bookslice.reducer;