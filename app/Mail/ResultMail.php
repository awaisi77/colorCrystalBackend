<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ResultMail extends Mailable
{
    use Queueable, SerializesModels;

    public $title;
    public $msg;
    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($title, $msg,$data)
    {
        Log::info("title:" . $title . "email:" . "Message:" . $msg);
        $this->title = $title;
        $this->msg = $msg;
        $this->data = $data;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->title)
            ->view('emails.result');
    }
}
