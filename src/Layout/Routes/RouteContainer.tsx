import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router";
import App from "../../App";
import MainContentContainer from "./MainContentContainer";
import PATHS from "./paths";
import WeatherForecastListingContainer, {
    WeatherForecastListingSkeleton,
} from "../../Pages/WeatherForecasts/WeatherForecastListing";
import { Suspense } from "react";
import WeatherForecastContainer, {
    WeatherForecastSkeleton,
} from "../../Pages/WeatherForecasts/WeatherForecast";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import { PaymentSkeleton } from "../../Pages/Payments/Payment";
import PaymentContainer from "../../Pages/Payments/Payment/PaymentContainer";
import PaymentListingContainer, { PaymentListingSkeleton } from "../../Pages/Payments/PaymentListing";
import TenantListingContainer, { TenantListingSkeleton } from "../../Pages/Tenants/TenantsListing";
import TenantContainer, { TenantSkeleton } from "../../Pages/Tenants/Tenant";
import SubsidiaryContainer, { SubsidiarySkeleton } from "../../Pages/Subsidiaries/Subsidiary";
import PropertyListingContainer, { PropertyListingSkeleton } from "../../Pages/Properties/PropertyListing";
import PropertyContainer, { PropertySkeleton } from "../../Pages/Properties/Property";
import PropertyCreateSkeleton from "../../Pages/Properties/PropertyCreate/PropertyCreateSkeleton";
import PropertyCreateContainer from "../../Pages/Properties/PropertyCreate/PropertyCreateContainer";
import PaymentCreateContainer, { PaymentCreateSkeleton } from "../../Pages/Payments/PaymentCreate";


const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
        
            <Route path={PATHS.HOME} element={<MainContentContainer />}>
                <Route path={PATHS.HOME} index element={<Home />} />
                <Route path={PATHS.WEATHER}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<WeatherForecastListingSkeleton />}>
                                <WeatherForecastListingContainer />
                            </Suspense>
                        }
                    />
                    <Route
                        path={PATHS.WEATHER_DETAILS}
                        element={
                            <Suspense fallback={<WeatherForecastSkeleton />}>
                                <WeatherForecastContainer />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path={PATHS.PAYMENTS}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<PaymentListingSkeleton />}>
                                <PaymentListingContainer />
                            </Suspense>
                        }
                    />
                    <Route
                        path={PATHS.PAYMENT_DETAILS}
                        element={
                            <Suspense fallback={<PaymentSkeleton />}>
                                <PaymentContainer />
                            </Suspense>
                        }
                    />
                    <Route path={PATHS.PAYMENT_CREATE} 
                element={
                    <Suspense fallback={<PaymentCreateSkeleton />}>
                        <PaymentCreateContainer />
                    </Suspense>
                }
                />
                </Route>

                        <Route path={PATHS.TENANT} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<TenantSkeleton />}>
                                <TenantContainer />
                            </Suspense>
                        }
                        />
                        </Route>
                <Route path={PATHS.TENANT_DETAILS} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<TenantListingSkeleton />}>
                                <TenantListingContainer />
                            </Suspense>
                        }
                    />
                    
                </Route>
                <Route path={PATHS.SUBSIDIARY} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<SubsidiarySkeleton />}>
                                <SubsidiaryContainer />
                            </Suspense>
                        }

                    />
                </Route>
                <Route path={PATHS.PROPERTY} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<PropertyListingSkeleton />}>
                                <PropertyListingContainer />
                            </Suspense>
                        }
                    />
                </Route>

                <Route path={PATHS.PROPERTY_DETAILS} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<PropertySkeleton />}>
                                <PropertyContainer />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path={PATHS.PROPERTY_CREATE} >
                    <Route
                        index
                        element={
                            <Suspense fallback={<PropertyCreateSkeleton />}>
                                <PropertyCreateContainer />
                            </Suspense>
                        }
                    />
                </Route> 

                
                <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Route>
    ),
    { basename: import.meta.env.PUBLIC_URL }
);

export default Router;
