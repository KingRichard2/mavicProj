
var ang = angular.module("angMod",[])


ang.controller("angCon",function($scope){
    
    $scope.price = 1499;
    $scope.quantity = 1;
    $scope.imgLink = "5b37fe6f2751046a99744b90.png";
    $scope.drones = [
        {
            droneName: "Mavic 2 Zoom",
            subTitle: "24-48mm Optical Zoom Camera with Ultimate Flexibility",
            features: [
                "20MP 1 CMOS Sensor",
                "Adjustable Aperture, f/2.8 -f/11",
                "10-bit Dlog-M colour profile",
                "10-bit HDR Video",
                "8km 1080p Video Transmission",
                "Omnidirection Obstacle Sensing",
                "31 min flight time",
                "Hyperlapse"
            ],
            image:"5b37fe6f2751046a99744b90.png",
            side:0,
        },
        {
            droneName: "Mavic 2 Pro",
            subTitle: "Hasselblad L1D-20c Camera Iconic Image Quality",
            features: [
                "20MP 1 CMOS Sensor",
                "Adjustable Aperture, f/2.8 -f/11",
                "10-bit Dlog-M colour profile",
                "10-bit HDR Video",
                "8km 1080p Video Transmission",
                "Omnidirection Obstacle Sensing",
                "31 min flight time",
                "Hyperlapse"
            ],
            image:"pngfind.com-drone-png-1013108.png",
            side:1,
        }
    ]

    $scope.droneSpecs = [
        {   
            image:"61d2fbd592b57c0004c6474e.png",
            camSpec:"48-Megapixel",
            camRes:"Super Resolution Photos",
            camDes:"When taking picture in 24mm equivalent field of view, the camera will capture and patch nine photos with it's telephoto lens, resulting in a 48-megapixel super resolution photo in vivid detail.",
            icon:[  {
                        path:'48.svg',
                        text:"Lens: 24-48mm"
                    },
                    {
                        path:"Stillimage.svg",
                        text:"Still image: 5472x3648"
                    },
                    {
                        path:"Sensor.svg",
                        text:"Sensor: 1\" CMOS"
                                
                    },
                    {
                        path:"Video.svg",
                        text:"Video: 4K: 3840x2160 30p"
                    }
            ],
            side:0

        },
        {
            image:"pngfind.com-mavic-pro-png-6105122.png",
            camSpec:"48-Megapixel",
            camRes:"Super Resolution Photos",
            camDes:"When taking picture in 24mm equivalent field of view, the camera will capture and patch nine photos with it's telephoto lens, resulting in a 48-megapixel super resolution photo in vivid detail.",
            icon:[ {
                        path:"freeMap.svg",
                        text:"Free"
                    },
                    {
                        path:"Circle.svg",
                        text:"Circle"
                    },
                    {
                        path:"CourseLock.svg",
                        text:"Course Lock"
                    },
                    {
                        path:"Waypoint.svg",
                        text:"Waypoint"
                    }
                ],
            side:1,
        }
    ]
    
    $scope.decreaseQuantity = () =>{
        if($scope.quantity==1) return;

        $scope.quantity -= 1;
    }

    $scope.increaseQuantity = () =>{
        $scope.quantity += 1;
    }

    $scope.totalPrice = () =>{
        return $scope.price * $scope.quantity;
    }

    $scope.setImage = (number) =>{
        switch(number){
            case 1:{
                $scope.imgLink = "5b37fe6f2751046a99744b90.png";
                break;
            }
            case 2:{
                $scope.imgLink = "61d2fbd592b57c0004c6474e.png";
                break;
            }
            case 3:{
                $scope.imgLink = "pngfind.com-dji-png-4835958.png";
                break;
            }
            case 4:{
                $scope.imgLink = "pngfind.com-mavic-pro-png-6105122.png";
                break;
            }
            case 5:{
                $scope.imgLink = "pngfind.com-portal-gun-png-2680904.png";
                break;
            }  
        }
    }
    
})





