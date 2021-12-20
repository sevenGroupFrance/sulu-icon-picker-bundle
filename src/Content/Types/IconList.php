<?php

namespace SevenGroupFrance\SuluIconPickerBundle\Content\Types;

use Sulu\Component\Content\SimpleContentType;

class IconList extends SimpleContentType
{
    public function __construct()
    {
        parent::__construct("icon_list");
    }
}
