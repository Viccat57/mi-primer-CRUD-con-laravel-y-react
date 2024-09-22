<?php

use App\Http\Controllers\Api\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(ProductController::class)->group(function(){
Route::get('/products','index');
Route::post('/product','store');
Route::get('/product/{i}','show');
Route::put('/product/{product}', [ProductController::class, 'update']);
Route::delete('/product/{i}','destroy');
});
