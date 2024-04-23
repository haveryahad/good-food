const resMenu = {
  154513: {
    statusCode: 0,
    data: {
      statusMessage: "done successfully",
      cards: [
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              text: "Arbab",
              headerStyling: {
                textColor: "text_Highest_Emphasis",
                textVariant: "header_H3_Black",
              },
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
              tabs: [
                {
                  id: "Order Online",
                  title: "Order Online",
                },
                {
                  id: "Dineout",
                  title: "Dineout",
                  cta: "https://swiggy.com/menu/154513/dineout",
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              info: {
                id: "154513",
                name: "Arbab",
                city: "Mumbai",
                slugs: {
                  restaurant: "arbab-bandra-west",
                  city: "mumbai",
                },
                uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                cloudinaryImageId: "f16af6635f057b991c45d0764dff2247",
                locality: "Bandra West",
                areaName: "Bandra West",
                costForTwo: "90000",
                costForTwoMessage: "₹900 for two",
                cuisines: ["Middle Eastern", "Lebanese"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "154513",
                  fees: [
                    {
                      name: "TYPE_DISTANCE",
                      fee: 5100,
                    },
                    {
                      name: "TYPE_TIME",
                    },
                  ],
                  totalFee: 5100,
                  title: "Delivery Charge",
                  amount: "5100",
                  icon: "v1648635511/Delivery_fee_new_cjxumu",
                  message: "<b>1.2 kms</b> | ₹51 Delivery fee will apply",
                },
                parentId: "35701",
                avgRatingString: "4.3",
                totalRatingsString: "1K+ ratings",
                sla: {
                  restaurantId: "154513",
                  deliveryTime: 24,
                  minDeliveryTime: 20,
                  maxDeliveryTime: 25,
                  lastMileTravel: 1.2,
                  serviceability: "SERVICEABLE",
                  stressFactor: 1,
                  rainMode: "RAIN_MODE_NONE",
                  longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  zoneId: 55,
                  slaString: "20-25 MINS",
                  lastMileTravelString: "1.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-04-01 04:00:00",
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: "Flat ₹100 off",
                  shortDescriptionList: [
                    {
                      meta: "Flat ₹100 off on orders above ₹1099",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "Flat ₹100 off on orders above ₹1099 | Use code FLAT100",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "15% off upto ₹150 | Use HSBCMANIA Above ₹499",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: "arbab-bandra-west",
                isOpen: true,
                labels: [
                  {
                    title: "Timings",
                    message: "null",
                  },
                  {
                    title: "Address",
                    message:
                      "Plot 117, Shop 4, Muzzafar Manor, Waterfield Road, Linking Road, Bandra West, Mumbai",
                  },
                  {
                    title: "Cuisines",
                    message: "Middle Eastern,Lebanese",
                  },
                ],
                logo: "v1660803982/Gourmet_Mumbai/Logos_18.8.22/Arbab.png",
                totalRatings: 1000,
                aggregatedDiscountInfoV2: {
                  header: "Flat ₹100 off",
                  shortDescriptionList: [
                    {
                      meta: "Flat ₹100 off on orders above ₹1099",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                    {
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  descriptionList: [
                    {
                      meta: "Flat ₹100 off on orders above ₹1099 | Use code FLAT100",
                      discountType: "Flat",
                      operationType: "RESTAURANT",
                    },
                    {
                      meta: "15% off upto ₹150 | Use HSBCMANIA Above ₹499",
                      discountType: "Percentage",
                      operationType: "RESTAURANT",
                    },
                  ],
                  couponDetailsCta: "View coupon details",
                },
                type: "F",
                nudgeBanners: [
                  {
                    minValue: 769,
                    maxValue: 1099,
                    priority: 1,
                    couponCode: "FLAT100",
                    discountInfo: {
                      discountType: "Flat",
                      value: 100,
                    },
                    lockedMessage:
                      "Add items worth ₹<amount> to save ₹100 | Code FLAT100",
                    unlockedMessage:
                      "FLAT100 Coupon Unlocked! Use it to save ₹100",
                    logoCtx: {},
                  },
                ],
                headerBanner: {
                  url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/154513",
                },
                expectationNotifiers: [
                  {
                    text: "<b>1.2 kms</b> | ₹51 Delivery fee will apply",
                    icon: {
                      imageId: "v1648635511/Delivery_fee_new_cjxumu",
                    },
                    popup: {
                      cta: {},
                    },
                    type: "DISTANCE_FEE_NON_FOOD_LM",
                    enrichedText:
                      "<b>1.2 kms</b> | ₹51 Delivery fee will apply",
                    halfCardPopup: {
                      halfCardPopupHeader: {},
                    },
                  },
                ],
                generalPurposeInfoListV2: [
                  {
                    cta: {
                      info: {
                        recordings: {},
                      },
                      linkCta: {},
                    },
                  },
                ],
                ratingSlab: "RATING_SLAB_5",
                restaurantCategory: "RESTAURANT_CATEGORY_GOURMET",
                backgroundImage:
                  "v1660805011/Gourmet_Mumbai/Menu%20headers_18.8.22/Arbab.png",
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: "19.05998576,72.8341152",
                backgroundImageOverlayInfo: {},
              },
              analytics: {},
            },
            relevance: {
              type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              sectionId: "POP_UP_CROUTON_MENU",
            },
          },
        },
        {
          card: {
            card: {
              "@type":
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              layout: {
                rows: 1,
                columns: 3,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
                scrollBar: {},
              },
              id: "offerCollectionWidget_UX4",
              gridElements: {
                infoWithStyle: {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  offers: [
                    {
                      info: {
                        header: "FLAT ₹100 OFF",
                        offerTag: "FLAT DEAL",
                        offerTagColor: "#E46D47",
                        offerIds: ["89d51f9d-acec-465b-ae19-977dd6dbd041"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE FLAT100",
                        description: "ABOVE ₹1099",
                        offerType: "offers",
                        restId: "154513",
                        offerLogo: "offers/generic",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "15% OFF UPTO ₹150",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/5e5be43d-5232-4afc-843d-d828639ae129_HSBC.png",
                        offerIds: ["7b012c7c-a7e1-49d7-a84a-2ba6e1224780"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE HSBCMANIA",
                        description: "ABOVE ₹499",
                        offerType: "offers",
                        restId: "154513",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/5e5be43d-5232-4afc-843d-d828639ae129_HSBC.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                    {
                      info: {
                        header: "FLAT ₹25 OFF",
                        offerTagColor: "#E46D47",
                        logoBottom:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/2aa1947a-fec1-43c6-97d0-c2d64f82e308_SimplMenuLogo.png",
                        offerIds: ["b8317262-33e1-4c2d-89b8-d9806cba271e"],
                        expiryTime: "1970-01-01T00:00:00Z",
                        couponCode: "USE SIMPL25",
                        description: "ABOVE ₹300",
                        offerType: "offers",
                        restId: "154513",
                        offerLogo:
                          "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/2aa1947a-fec1-43c6-97d0-c2d64f82e308_SimplMenuLogo.png",
                        descriptionTextColor: "#7302060C",
                      },
                      cta: {
                        type: "OFFER_HALF_CARD",
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        badges: {},
                        vegOnlyDetails: {
                          imageId: "AutoVegOnly_qkjowj",
                          title: "Showing only vegetarian options.",
                          description:
                            "Tap on the VEG ONLY button to turn off the setting",
                        },
                        topRatedFilter: {},
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: "Kids Favourites",
                            tooltip: {
                              enabled: true,
                              displayText:
                                "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: "VEG",
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: "NONVEG",
                          },
                        },
                      },
                      relevance: {
                        type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        sectionId: "MENU_FILTER_TOGGLE",
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Shawarma",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063746",
                                name: "Chicken Shawarma Platter",
                                category: "Shawarma",
                                description:
                                  "Shawanna chicken & pickled vegetables wrapped in a freshly baked bread, served with fries, garlic & chilli sauce",
                                imageId: "4380f8d4f876f8e052efa1447e338fba",
                                inStock: 1,
                                price: 38000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "847 ratings",
                                    ratingCountV2: "847",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790889",
                                name: "Spicy Chicken Shawarma Platter",
                                category: "Shawarma",
                                description:
                                  "Shawarma chicken & pickled vegetables, green chillies and in freshly baked bread, served with fries, garlic & chilli sauce",
                                imageId: "4380f8d4f876f8e052efa1447e338fba",
                                inStock: 1,
                                price: 38000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "150 ratings",
                                    ratingCountV2: "150",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063747",
                                name: "Lamb Shawarma Platter",
                                category: "Shawarma",
                                description:
                                  "Strips of lean iamb fillet marinated in tahina, grilled onions & tomatoes and spices served with fries, tahina & chilli sauce",
                                inStock: 1,
                                price: 52500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "67 ratings",
                                    ratingCountV2: "67",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790888",
                                name: "Paneer Shawarma Platter",
                                category: "Shawarma",
                                description:
                                  "Traditional paneer shawarma served with garlic & chilli sauce and fries",
                                imageId: "f85f6065ef205013d44bf7e5f7f01925",
                                inStock: 1,
                                isVeg: 1,
                                price: 36000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "22 ratings",
                                    ratingCountV2: "22",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "From The Grill",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063754",
                                name: "Shish Tawouk",
                                category: "From The Grill",
                                description:
                                  "Overnight marinated chicken cubes, grilled to perfection in skewers and served with grilled veggies. Arabic rice, garlic & chilli sauce",
                                inStock: 1,
                                price: 48500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "445 ratings",
                                    ratingCountV2: "445",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "67635943",
                                name: "Paneer Tawouk",
                                category: "From The Grill",
                                description:
                                  "Specially marinated paneer cubes, grilled to perfection served with grilled veggies, arbab rice, garlic & chilli sauce",
                                inStock: 1,
                                isVeg: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "11 ratings",
                                    ratingCountV2: "11",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063755",
                                name: "Lamb Mishwi",
                                category: "From The Grill",
                                description:
                                  "Succulent skewers of tender lamb cubes, marinated in lebanese special spices served with arbab rice,grilled vegetables, garlic and chilli sauce",
                                inStock: 1,
                                price: 57000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "49 ratings",
                                    ratingCountV2: "49",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790873",
                                name: "Chicken Kebab",
                                category: "From The Grill",
                                description:
                                  "Skewers of chicken mince, marinated in lebanese special spices served with arbab rice, grilled vegetables, garlic and chilli sauce",
                                inStock: 1,
                                price: 48500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "34 ratings",
                                    ratingCountV2: "34",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790894",
                                name: "Lamb Kebab",
                                category: "From The Grill",
                                description:
                                  "Skewers of lamb mince, marinated in lebanese special spices served with arbab rice, grilled vegetables, garlic and chilli sauce",
                                inStock: 1,
                                price: 52500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.3",
                                    ratingCount: "81 ratings",
                                    ratingCountV2: "81",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "87108835",
                                name: "Grilled Chicken Wings",
                                category: "From The Grill",
                                description:
                                  "Char grilled, marinated chicken wings served with garlic & chilli sauce",
                                inStock: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "17 ratings",
                                    ratingCountV2: "17",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790896",
                                name: "Reeyash Grilled Lamb Chops",
                                category: "From The Grill",
                                description:
                                  "5 pieces of chops per serving, succulent & tender lamb chops, marinated in special arabic herbs & spices, chargrilled to perfection, served with arbab rice & sauteed vegetables, garlic and chilli sauce",
                                inStock: 1,
                                price: 85000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.0",
                                    ratingCount: "19 ratings",
                                    ratingCountV2: "19",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790897",
                                name: "Mashawi Mushakal Arabic Mixed Grill",
                                category: "From The Grill",
                                description:
                                  "Platter of char-grilled lamb chops, lamb. Chicken kebabs and shish tawouk, served with arbab rice,sauteed vegetables. Garlic & chilli sauce",
                                inStock: 1,
                                price: 125000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063753",
                                name: "Toshka",
                                category: "From The Grill",
                                description:
                                  "Seasoned minced chicken or lamb on a bed of cheese in a grilled flatbread",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 57000,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "47 ratings",
                                    ratingCountV2: "47",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790875",
                                name: "Arayes",
                                category: "From The Grill",
                                description:
                                  "Seasoned minced chicken or lamb in a grilled flatbread",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 54000,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.7",
                                    ratingCount: "6 ratings",
                                    ratingCountV2: "6",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517200",
                                name: "Halabi Kebab",
                                category: "From The Grill",
                                description:
                                  "Skewers of your choice of meat, marinated in lebanese special spices and served with arbab rice,grilled vegetables, garlic & chilli sauce",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 48500,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063759",
                                name: "Grilled Prawns",
                                category: "From The Grill",
                                description:
                                  "Char-grilled, marinated prawns served with garlic & chilly sauce",
                                inStock: 1,
                                price: 65000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517201",
                                name: "Orfali Kebab",
                                category: "From The Grill",
                                description:
                                  "Skewers of your choice of meat and veggies, marinated in lebanese special spices served with arbab rice,garlic & chilli sauce",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 48500,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Cold Mezze",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063725",
                                name: "Hummus",
                                category: "Cold Mezze",
                                description:
                                  "Chickpeas puree with tahina and lemon juice topped with extra virgin olive oil",
                                imageId: "20850b00541a2f7944acdfd385013e84",
                                inStock: 1,
                                isVeg: 1,
                                price: 37000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "857 ratings",
                                    ratingCountV2: "857",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063726",
                                name: "Hummus Beiruty",
                                category: "Cold Mezze",
                                description:
                                  "Chickpeas puree with tahina, parsley, pickles, green chillies and lemon juice topped mth extra virgin olive oil",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "387 ratings",
                                    ratingCountV2: "387",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790871",
                                name: "Chilli Hummus",
                                category: "Cold Mezze",
                                description:
                                  "Chickpeas puree with tahina, lemon juice, lebanese chilli topped with extra virgin olive oil",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790891",
                                name: "Moutabal",
                                category: "Cold Mezze",
                                description:
                                  "Chargrilled mashed eggplant mixed with tahina, lemon juice and topped with finest virgin olive oil",
                                imageId: "61c6ca26269dd4ca58f4786e019c1a2c",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121796682",
                                name: "Selections Of Hummus",
                                category: "Cold Mezze",
                                inStock: 1,
                                isVeg: 1,
                                price: 59000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063729",
                                name: "Baba Ganouj",
                                category: "Cold Mezze",
                                description:
                                  "Roasted eggplant relish with mint, parsley, pomegranate & mixed bell peppers, spring onion and tomatoes",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "68 ratings",
                                    ratingCountV2: "68",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127380019",
                                name: "Labneh",
                                category: "Cold Mezze",
                                description:
                                  "Home-made creamy yoghurt cheese dip mixed with special seasonings topped with finest virgin olive oil",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127380020",
                                name: "Muhamara",
                                category: "Cold Mezze",
                                description:
                                  "Traditional roasted red pepper & walnut dip mixed with garlic; pom syrup topped with finest virgin oil",
                                inStock: 1,
                                isVeg: 1,
                                price: 39500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Freshly Baked From The Oven",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790893",
                                name: "Zatar",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 47000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790874",
                                name: "Akawi Cheese",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 52000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.9",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790868",
                                name: "Harhoura",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 36000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790895",
                                name: "Laham Baajin",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                price: 55000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "69348804",
                                name: "Khubz",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "192 ratings",
                                    ratingCountV2: "192",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790862",
                                name: "Khubz (Basket Of Three)",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "73 ratings",
                                    ratingCountV2: "73",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "42005470",
                                name: "Saj",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 7500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "116 ratings",
                                    ratingCountV2: "116",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790879",
                                name: "Saj (Basket Of Three)",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 15000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127567979",
                                name: "Cheese & Vegetables",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 52000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127567980",
                                name: "Chicken Baajin",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                price: 55000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127567978",
                                name: "Vegetables",
                                category: "Freshly Baked From The Oven",
                                description:
                                  "Authentic manakish homemade flat bread with delectable toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 52000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Rice Dishes",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790863",
                                name: "Arbab Rice",
                                category: "Rice Dishes",
                                description: "Mildly flavoured lebanese rice",
                                inStock: 1,
                                isVeg: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790870",
                                name: "Arbab Rice With Vegetables",
                                category: "Rice Dishes",
                                inStock: 1,
                                isVeg: 1,
                                price: 32500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790869",
                                name: "Arbab Rice With Falafel",
                                category: "Rice Dishes",
                                inStock: 1,
                                isVeg: 1,
                                price: 32500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.2",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "54428935",
                                name: "Shish Tawouk Rice",
                                category: "Rice Dishes",
                                inStock: 1,
                                price: 48500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "2.8",
                                    ratingCount: "65 ratings",
                                    ratingCountV2: "65",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "54428944",
                                name: "Lamb Mishwi Rice",
                                category: "Rice Dishes",
                                inStock: 1,
                                price: 57000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "15 ratings",
                                    ratingCountV2: "15",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "54428928",
                                name: "Lamb Kebab Rice",
                                category: "Rice Dishes",
                                inStock: 1,
                                price: 52500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "78 ratings",
                                    ratingCountV2: "78",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "67635967",
                                name: "Lamb Mandi Rice",
                                category: "Rice Dishes",
                                description:
                                  "Delicious and traditional rice preparation with lamb & mandi spices slowly cooked in an oven served with mandi sauce. ",
                                inStock: 1,
                                price: 119000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sauce",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790859",
                                name: "Thum(garlic Sauce)",
                                category: "Sauce",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {
                                  text: "Bestseller",
                                  textColor: "#ffffff",
                                  topBackgroundColor: "#d53d4c",
                                  bottomBackgroundColor: "#b02331",
                                },
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.8",
                                    ratingCount: "44 ratings",
                                    ratingCountV2: "44",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790856",
                                name: "Chilli Paste",
                                category: "Sauce",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790858",
                                name: "Tahina",
                                category: "Sauce",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121805559",
                                name: "Pickle",
                                category: "Sauce",
                                inStock: 1,
                                isVeg: 1,
                                price: 9000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Homemade Desserts",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063736",
                                name: "Mahalabia",
                                category: "Homemade Desserts",
                                description:
                                  "Milk pudding, flavor with rose water topped with strawberry crush and pistachio nuts",
                                inStock: 1,
                                isVeg: 1,
                                price: 25000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.9",
                                    ratingCount: "23 ratings",
                                    ratingCountV2: "23",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790892",
                                name: "Kunafah",
                                category: "Homemade Desserts",
                                description:
                                  "Rich, creamy, akawi cheese pastry with a crunchy topping",
                                imageId: "eba9a401bf44cf7c8a7bb354139fe1cd",
                                inStock: 1,
                                isVeg: 1,
                                price: 39000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "28 ratings",
                                    ratingCountV2: "28",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "42302645",
                                name: "Baklava",
                                category: "Homemade Desserts",
                                description:
                                  "All time favourite-crispy filo pastry filled with dry fruits & crushed mats. ",
                                imageId: "0b4721a4a63009cb64ee753aee83b835",
                                inStock: 1,
                                isVeg: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.7",
                                    ratingCount: "42 ratings",
                                    ratingCountV2: "42",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790872",
                                name: "Quattro Leches",
                                category: "Homemade Desserts",
                                description:
                                  "Delicious, tender cake, soaked in four different flavors of milk",
                                inStock: 1,
                                isVeg: 1,
                                price: 39000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127567981",
                                name: "Banana And Chocolate Manakish",
                                category: "Homemade Desserts",
                                description:
                                  "A classic combination filled to perfection on a baked flat bread. ",
                                inStock: 1,
                                isVeg: 1,
                                price: 39000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sandwich",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790866",
                                name: "Batata Harra Roll",
                                category: "Sandwich",
                                inStock: 1,
                                isVeg: 1,
                                price: 27500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "5.0",
                                    ratingCount: "4 ratings",
                                    ratingCountV2: "4",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "108195800",
                                name: "Falafel Sandwich",
                                category: "Sandwich",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "31 ratings",
                                    ratingCountV2: "31",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "108195801",
                                name: "Lamb Kebab Sandwich",
                                category: "Sandwich",
                                inStock: 1,
                                price: 49000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "9 ratings",
                                    ratingCountV2: "9",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "108195802",
                                name: "Lamb Mishwi Sandwich",
                                category: "Sandwich",
                                inStock: 1,
                                price: 49000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "108195803",
                                name: "Chicken Kebab Sandwich",
                                category: "Sandwich",
                                inStock: 1,
                                price: 42500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "3.8",
                                    ratingCount: "5 ratings",
                                    ratingCountV2: "5",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790890",
                                name: "Paneer Tawouk Sandwich",
                                category: "Sandwich",
                                inStock: 1,
                                isVeg: 1,
                                price: 37500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                        title: "Beverages",
                        categories: [
                          {
                            title: "100% Natural Juices",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790885",
                                    name: "Orange Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 32500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790884",
                                    name: "Watermelon Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790883",
                                    name: "Pomegranate Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 35000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790867",
                                    name: "Grapes Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 35000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790882",
                                    name: "Musk Melon Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 32500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "128070144",
                                    name: "Sweet Lime Juice",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 32500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                          },
                          {
                            title: "Mocktails",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "108194981",
                                    name: "Blue Berry Burst",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "68126798",
                                    name: "Apple Mojito",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "68126800",
                                    name: "Spicy Guava",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "68126801",
                                    name: "Virgin Mojito",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "3.2",
                                        ratingCount: "4 ratings",
                                        ratingCountV2: "4",
                                      },
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "37063766",
                                    name: "Watermelon Mojito",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790881",
                                    name: "Mint  Lemonade",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "128070146",
                                    name: "Jallab",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "128070147",
                                    name: "Laban Ayran",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 27500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                          },
                          {
                            title: "Hot Beverage",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "128070149",
                                    name: "Green Tea",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 17500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                          },
                          {
                            title: "Iced Tea",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "108194990",
                                    name: "Peach",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 22500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "108194991",
                                    name: "Lemon",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 22500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                          },
                          {
                            title: "Cold Beverage",
                            itemCards: [
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "37063768",
                                    name: "Malaki Water Bottle",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 10500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "5.0",
                                        ratingCount: "4 ratings",
                                        ratingCountV2: "4",
                                      },
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790860",
                                    name: "Coke",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 12500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790861",
                                    name: "Fresh Lime Soda",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 15000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {
                                        rating: "5.0",
                                        ratingCount: "4 ratings",
                                        ratingCountV2: "4",
                                      },
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121790877",
                                    name: "Fresh Lime Water",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 15000,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121805555",
                                    name: "Sprite",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 12500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121805556",
                                    name: "Thumsup",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 12500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121805557",
                                    name: "Fanta",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 12500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                              {
                                card: {
                                  "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                  info: {
                                    id: "121805558",
                                    name: "Diet Coke",
                                    category: "Beverages",
                                    inStock: 1,
                                    isVeg: 1,
                                    price: 12500,
                                    variants: {},
                                    variantsV2: {},
                                    itemAttribute: {
                                      vegClassifier: "VEG",
                                    },
                                    ribbon: {},
                                    type: "ITEM",
                                    itemBadge: {},
                                    badgesV2: {},
                                    ratings: {
                                      aggregatedRating: {},
                                    },
                                  },
                                  analytics: {},
                                  hideRestaurantDetails: true,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Hot Mezze",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063735",
                                name: "Arbab Special Batata Harra",
                                category: "Hot Mezze",
                                description:
                                  "Specially spiced potato cubes, topped with garlic butter, coriander & lemon juice",
                                inStock: 1,
                                isVeg: 1,
                                price: 38500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "90 ratings",
                                    ratingCountV2: "90",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790876",
                                name: "Falafel Platter (5 Pieces Per Serving)",
                                category: "Hot Mezze",
                                description:
                                  "A blend of fava beans & chickpeas, fresh coriander, garlic & onions served with pickled vegetables and tahina",
                                imageId: "5bb9f826732caccda8399109e1ca98fd",
                                inStock: 1,
                                isVeg: 1,
                                price: 38500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "28 ratings",
                                    ratingCountV2: "28",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063739",
                                name: "Hummus Bil Lahm",
                                category: "Hot Mezze",
                                description:
                                  "Hummus mixed with spiced lamb, topped with fried pine nuts",
                                inStock: 1,
                                price: 48500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.5",
                                    ratingCount: "72 ratings",
                                    ratingCountV2: "72",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790864",
                                name: "Golden Fries",
                                category: "Hot Mezze",
                                inStock: 1,
                                isVeg: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                defaultPrice: 24000,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.4",
                                    ratingCount: "8 ratings",
                                    ratingCountV2: "8",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517194",
                                name: "Golden Fries -Parmesan Cheese Truffle",
                                category: "Hot Mezze",
                                description:
                                  "French fries with your choice of toppings",
                                inStock: 1,
                                isVeg: 1,
                                price: 32500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517195",
                                name: "Chicken Liver",
                                category: "Hot Mezze",
                                description:
                                  "Pan fried with garlic, onion, lemon juice and seasonal spices",
                                inStock: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517196",
                                name: "Chicken Wings Provencale",
                                category: "Hot Mezze",
                                description:
                                  "Fried chicken wings sauteed with garlic, coriander, and lemon juice",
                                inStock: 1,
                                price: 45000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517197",
                                name: "Fish N Chips",
                                category: "Hot Mezze",
                                description:
                                  "Traditional international favourite",
                                inStock: 1,
                                price: 55000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "132778820",
                                name: "Mixed Vegetable",
                                category: "Hot Mezze",
                                inStock: 1,
                                isVeg: 1,
                                price: 38500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517199",
                                name: "Musakhan",
                                category: "Hot Mezze",
                                description:
                                  "Traditional palestinian dish of roasted chicken or lamb seasoned in special spices and topped with caramelized red onions",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 55000,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.6",
                                    ratingCount: "3 ratings",
                                    ratingCountV2: "3",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517198",
                                name: "Seafood Provencale",
                                category: "Hot Mezze",
                                description:
                                  "Pan fried fish or calamari or prawns sauteed with garlic, coriander, and lemon juice",
                                inStock: 1,
                                variants: {},
                                itemAttribute: {
                                  vegClassifier: "NONVEG",
                                },
                                defaultPrice: 55000,
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Green From Our Garden",
                        itemCards: [
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "54429027",
                                name: "Fattoush",
                                category: "Green From Our Garden",
                                description:
                                  "Lebanese chunky salad, tossed in lemon, mint, olive oil, sumac, pomegranate synp, cubes of fried bread",
                                inStock: 1,
                                isVeg: 1,
                                price: 32000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.1",
                                    ratingCount: "101 ratings",
                                    ratingCountV2: "101",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "121790886",
                                name: "Tabbouleh",
                                category: "Green From Our Garden",
                                description:
                                  "Lebanese favourite with chopped parsley, mint, tomato and onions tossed in lemon juice and olive oil",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.7",
                                    ratingCount: "14 ratings",
                                    ratingCountV2: "14",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "37063723",
                                name: "Falafel Salad",
                                category: "Green From Our Garden",
                                description:
                                  "Our speciality green chunky salad. Tossed in lemon juice, olive oil topped with falafel tahina",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "156 ratings",
                                    ratingCountV2: "156",
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              info: {
                                id: "127517193",
                                name: "Rocca Salad",
                                category: "Green From Our Garden",
                                description:
                                  "Traditional salad, a mix of parmesan cheeses, cherry tomatoes, nuts & rocket onions tossed in pom molasses. ",
                                inStock: 1,
                                isVeg: 1,
                                price: 35000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: "VEG",
                                },
                                ribbon: {},
                                type: "ITEM",
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        type: "FSSAI",
                        imageId: "fssai_final_edss9i",
                        text: ["License No. 21519026000064"],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        name: "Arbab",
                        area: "Bandra West",
                        completeAddress:
                          "Plot 117, Shop 4, Muzzafar Manor, Waterfield Road, Linking Road, Bandra West, Mumbai",
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
  },
};
export default resMenu;
