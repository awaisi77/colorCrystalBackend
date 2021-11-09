<?php

namespace App\Http\Controllers;

use App\GameRequest;
use App\Mail\ResultMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class RestController extends Controller
{
    public function postTest(Request $request)
    {
      try{
        //get the base-64 from data
        //$base64_str = str_replace('data:image/png;base64,', '', $request->base64_image);
        //$base64_str = str_replace(' ', '+', $base64_str);
         $base64_str = substr($request->base64_image, strpos($request->base64_image, ",")+1);
        //decode base64 string
        $image = base64_decode($base64_str);
        $destinationPath = public_path('/images/');
        $fileName = uniqid() . '.png';
        $file = $destinationPath . $fileName;
        $success = file_put_contents($file, $image);

        GameRequest::create([
            'from_name' => $request['from_name'],
            'from_email' => $request['from_email'],
            'to_email' => $request['to_email'],
            'to_name' => $request['to_name'],
            'your_color' => $request['your_color'],
            'game_user_id' => null,
            'image' => $fileName
        ]);
        /* Storage::disk('local')->put('image.png', $image);
         $storagePath = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
         echo $storagePath.'image.png';*/
        $response = array(
            'status' => 200,
            'success' => true,
            'url'=>'http://localhost:8000/images/'.$fileName,
            'msg'=>'success'
        );

        $data = array('from_name' => $request['from_name'],
            'from_email' => $request['from_email'],
            'to_email' => $request['to_email'],
            'to_name' => $request['to_name'],
            'image' => 'images/'.$fileName
            );
          $sendmail = Mail::to($request['to_email'])->send(new ResultMail('Color Crystal Result', '', $data));

        return response()->json($response);
    }catch (\Exception $exception){
          Log::error($exception);
          $response = array(
              'status' => 500,
              'success' => false,
              'url'=>null,
              'msg'=>$exception->getMessage()
          );
          return response()->json($response);
      }
    }
}
