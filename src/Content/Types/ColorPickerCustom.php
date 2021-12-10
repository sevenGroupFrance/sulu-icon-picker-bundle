<?php

namespace SevenGroupFrance\SuluIconPickerBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class FontIconPickerCustom extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct("font_icon_picker");
    }
}
