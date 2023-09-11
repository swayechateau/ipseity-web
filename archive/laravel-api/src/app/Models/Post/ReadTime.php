<?php

namespace App\Models\Post;

class ReadTime
{
  protected $content;

  public function setContent($content)
  {
    $this->content = $content;
  }
  /**
   * Undocumented function
   *
   * @param [type] $content
   * @return void
   */
  public function minutes()
  {
    $wordCount = str_word_count($this->content);
    $readingTimeInMinutes = floor($wordCount / 228) + 1;
    return $readingTimeInMinutes;
  }
}
