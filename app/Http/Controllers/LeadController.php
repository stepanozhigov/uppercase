<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        // return response()->json($request->all());

        $response = Http::asForm()->post('http://amoconnect.ru/amo-ipravo/api/slug/lmr-ifinance', [
            'url' => $request->url,
            'phone' => $request->phone,
            'email' => $request->email,
            'lead_comment' => $request->lead_comment,
            'utm' => $request->utm,
            'contact_fields' => [
                'geo_location' => $request->geoLocation,
                'ip_location' => $request->ipLocation
            ]
        ]);
        if ($response->successful()) {
            return response()->json($response->json());
        } elseif ($response->failed()) {
            return response()->json($response->throw()->json());
        }
    }
}
